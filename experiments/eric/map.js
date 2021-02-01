//Global States
const broughtByPlayer = "broughtByPlayer";
const broughtByOpponent = "broughtByOpponent";

let map;
createMap();

function createMap() {
  $("#container").empty();
  map = new Datamap({
    element: document.getElementById("container"),
    scope: "usa",
    done: function(datamap) {
      console.log(datamap);
      datamap.svg.selectAll(".datamaps-subunit").on("click", geography => {
        changeOwnership(geography);
        setLandColor(geography);
        createMap();
      });
    },
    geographyConfig: {
      highlightBorderColor: "#bada55",
      popupTemplate: function(land, data) {
        const i = `<div class="hoverinfo">${land.properties.name}
        Resource Cost: ${data.resourceCost} `;
        return i;
      },
      popupOnHover: true,
      highlightBorderWidth: 3
    },
    fills: {
      // notBrought: "#D3D3D3",
      [broughtByPlayer]: "#228B22",
      [broughtByOpponent]: "#B22222",
      defaultFill: "#D3D3D3"
    },
    data: States
  });
}

function changeOwnership(geography) {
  const stateTarget = geography.id;
  if (States[stateTarget].isOwned === false) {
    States[stateTarget].isOwned = true;
  }
}
// map.updateChoropleth({
//   USA: {fillKey: 'LOW'},
//   CAN: '#0fa0fa'
// });

function setLandColor(geography) {
  const stateTarget = geography.id;
  if (States[stateTarget].isOwned === true) {
    if (States[stateTarget].ownedBy === "Rockefeller") {
      States[stateTarget].fillKey = broughtByPlayer;
    } else {
      States[stateTarget].fillKey = broughtByOpponent;
    }
  } else {
    States[stateTarget].fillKey = "defaultFill";
  }

  console.log(States[stateTarget].fillKey);
  // map.updateChoropleth(
  //   { [stateTarget]: { fillKey: States[stateTarget].fillKey } },
  //   { reset: false }
  // );
  map.updateChoropleth(States, { reset: true });
}
