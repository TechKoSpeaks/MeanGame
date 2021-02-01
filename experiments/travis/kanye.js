// function buildQueryURL() {
// 	// queryURL is the url we'll use to query the API
// 	var queryURL = "https://api.kanye.rest.com/";
  
// 	// Begin building an object to contain our API call's query parameters
// 	// Set the API key
// 	var queryParams = { "api-key": "" };
  
// 	// Grab text the user typed into the search input, add to the queryParams object
// 	queryParams.q = $("#search-term")
// 	  .val()
// 	  .trim();
  
// 	// If the user provides a startYear, include it in the queryParams object
// 	var startYear = $("#start-year")
// 	  .val()
// 	  .trim();
  
// 	if (parseInt(startYear)) {
// 	  queryParams.begin_date = startYear + "0101";
// 	}
  
// 	// If the user provides an endYear, include it in the queryParams object
// 	var endYear = $("#end-year")
// 	  .val()
// 	  .trim();
  
// 	if (parseInt(endYear)) {
// 	  queryParams.end_date = endYear + "0101";
// 	}
  
// 	// Logging the URL so we have access to it for troubleshooting
// 	console.log("---------------\nURL: " + queryURL + "\n---------------");
// 	console.log(queryURL + $.param(queryParams));
// 	return queryURL + $.param(queryParams);
//   }


async function handleRequest(request) {
	try {
		const headers = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
			'Access-Control-Allow-Headers': 'Content-Type'
		};

		const url = new URL(request.url);
		var formatParameter = null;
		if (url.searchParams.get('format')) {
			formatParameter = url.searchParams.get('format').toLocaleLowerCase().split('/')[0];
			if (formatParameter != 'json' && formatParameter != 'text') {
				return new Response('Invalid format parameter. Refer to https://kanye.rest', {
					status: 400,
					headers: {
						...headers
					}
				});
			}
		}
		const acceptHeader = request.headers.get('Accept');

		const quotes = JSON.parse(
			await (await fetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json')).text()
		);

		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

		if (formatParameter !== 'text' && acceptHeader !== 'text/plain') {
			return new Response(JSON.stringify({ quote: randomQuote }), {
				headers: {
					...headers,
					'Content-Type': 'application/json'
				}
			});
		} else {
			return new Response(randomQuote, {
				headers: {
					...headers,
					'Content-Type': 'text/plain'
				}
			});
		}
	} catch (error) {
		return new Response('An unexpected error ocurred', {
			status: 500,
			headers: {
				...headers
			}
		});
	}
}

addEventListener('fetch', (event) => {
	return event.respondWith(handleRequest(event.request));
});