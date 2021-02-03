//Global States
const broughtByPlayer = "broughtByPlayer";
const broughtByOpponent = "broughtByOpponent";

let map;
const States = {};
// createMap();

init();

function init() {
  updateLandArray();
  updateResourceText();
  gameOver();
}

function gameOver() {
  if (checkGameOver()) {
    //run script
    $.ajax({
      url: "/api/lands/reset",
      type: "PUT"
    })
      // eslint-disable-next-line no-unused-vars
      .then(data => {
        createMap();
      })
      .fail(error => {
        console.log(error);
      });
  }
}

function checkGameOver() {
  let gameOver = true;

  $.get("/api/lands", data => {
    data.forEach(land => {
      if (States[land.code].is_owned) {
        gameOver = false;
        return gameOver;
      }
    });
    return gameOver;
  });
}

function updateResourceText() {
  $.get("/api/resources/1", data => {
    $(".resourceAmount").text(data.inventory);
  });
}

function updateLandArray() {
  $.get("/api/lands", data => {
    data.forEach(land => {
      States[land.code] = land;
    });
    console.log(States);
  }).then(() => {
    createMap();
    setAllLandColor();
    createMap();
  });
}

function createMap() {
  $("#mapDiagram").empty();
  map = new Datamap({
    element: document.getElementById("mapDiagram"),
    scope: "usa",
    done: function(datamap) {
      datamap.svg.selectAll(".datamaps-subunit").on("click", geography => {
        //Do nothing if land is already owned
        if (geography.is_owned) {
          return;
        }
        // changeOwnership(geography);
        purchaseLand(geography);
        updateResourceText();
        gameOver();
      });
    },
    geographyConfig: {
      highlightBorderColor: "#bada55",
      popupTemplate: function(land, data) {
        const i = `<div class="hoverinfo">${land.properties.name}
        Resource Cost: ${data.resource_cost} `;
        return i;
      },
      popupOnHover: true,
      highlightBorderWidth: 3
    },
    fills: {
      [broughtByPlayer]: "#228B22",
      [broughtByOpponent]: "#B22222",
      defaultFill: "#D3D3D3"
    },
    data: States
  });
}

//see land-api-routes.
//In there, will check on server side if user has enough resources to purchase land
// eslint-disable-next-line no-unused-vars
function purchaseLand(geography, callback) {
  $.ajax({
    url: `/api/lands/${geography.id}/purchase`,
    type: "PUT"
  })
    .then(data => {
      console.log(data);
      if (data.response === "Successful") {
        updateLandArray();
      }
      callback(data);
    })
    .fail(error => {
      console.log(error);
    });
}

// when player clicks a state
// if state is owned
// do nothing
// if state is not owned and playerResource >= state resource cost - send request. API-purchase-route
// update state ownshership to owned
// new player resource is equal to player resource - state resource cost
// update player resource to new resource amount
// render map with updated state data

function setAllLandColor() {
  for (const code in States) {
    {
      if (States[code].is_owned) {
        States[code].fillKey = broughtByPlayer;
      } else {
        States[code].fillKey = "defaultFill";
      }
    }
    map.updateChoropleth(States, { reset: true });
  }
}
