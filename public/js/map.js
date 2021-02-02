//Global States
const broughtByPlayer = "broughtByPlayer";
const broughtByOpponent = "broughtByOpponent";

let map;
createMap();

function createMap() {
  $("#mapDiagram").empty();
  map = new Datamap({
    element: document.getElementById("mapDiagram"),
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

function setLandColor(geography) {
  const stateTarget = geography.id;
  if (States[stateTarget].isOwned) {
    States[stateTarget].fillKey = broughtByPlayer;
  } else {
    States[stateTarget].fillKey = "defaultFill";
  }

  map.updateChoropleth(States, { reset: true });
}
