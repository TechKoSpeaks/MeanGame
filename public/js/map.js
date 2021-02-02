//Global States
const broughtByPlayer = "broughtByPlayer";
const broughtByOpponent = "broughtByOpponent";

let map;
const playerResourceInventory = 0;
createMap();

function createMap() {
  $("#mapDiagram").empty();
  map = new Datamap({
    element: document.getElementById("mapDiagram"),
    scope: "usa",
    done: function(datamap) {
      datamap.svg.selectAll(".datamaps-subunit").on("click", geography => {
        changeOwnership(geography);
        // $.put(`/api/lands/${geography.id}/purchase`);
        setLandColor(geography);
        createMap();
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

// when player clicks a state
// if state is owned
// do nothing
// if state is not owned and playerResource >= state resource cost - send request. API-purchase-route
// update state ownshership to owned
// new player resource is equal to player resource - state resource cost
// update player resource to new resource amount
// render map with updated state data

function changeOwnership(geography) {
  const stateTarget = geography.id;
  // playerResourceInventory = getResourceInventory();
  // console.log(playerResourceInventory);
  // console.log(playerResourceInventory >= States[stateTarget].resource_cost);
  if (
    States[stateTarget].is_owned === false &&
    playerResourceInventory >= States[stateTarget].resource_cost
  ) {
    // eslint-disable-next-line camelcase
    States[stateTarget].is_owned = true;
  }
  // getResourceInventory();
}

function setLandColor(geography) {
  const stateTarget = geography.id;
  if (States[stateTarget].is_owned) {
    States[stateTarget].fillKey = broughtByPlayer;
  } else {
    States[stateTarget].fillKey = "defaultFill";
  }
  map.updateChoropleth(States, { reset: true });
}

// function getResourceInventory(callback) {
//   $.get("/api/resources/1", data => {
//     return data.inventory;
//   });
// }
