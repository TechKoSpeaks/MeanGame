/* eslint-disable no-unused-vars */
const states = {
  AZ: {
    fillKey: "broughtByPlayer",
    resourceCost: 10
  },
  CO: {
    fillKey: "broughtByOpponent",
    resourceCost: 10
  },
  DE: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  FL: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  GA: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  HI: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  ID: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  IL: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  IN: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  IA: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  KS: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  KY: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  LA: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  MD: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  ME: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  MA: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  MN: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  MI: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  MS: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  MO: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  MT: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  NC: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  NE: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  NV: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  NH: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  NJ: {
    fillKey: "defaultFill",
    id: 3,
    name: "New Jersey",
    resourceCost: 15,
    ownedBy: "Rockefeller",
    isOwned: true
  },
  NY: {
    fillKey: "defaultFill",
    id: 1,
    name: "New York",
    resourceCost: 10,
    ownedBy: "Rockefeller",
    isOwned: true
  },
  ND: {
    fillKey: "defaultFill",
    id: 2,
    name: "North Dakota",
    resourceCost: 20,
    ownedBy: "Rockefeller",
    isOwned: true
  },
  NM: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  OH: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  OK: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  OR: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  PA: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  RI: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  SC: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  SD: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  TN: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  TX: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  UT: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  WI: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  VA: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  VT: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  WA: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  WV: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  WY: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  CA: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  CT: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  AK: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  AR: {
    fillKey: "defaultFill",
    resourceCost: 10
  },
  AL: {
    fillKey: "defaultFill",
    resourceCost: 10
  }
};

// NJ: {
//   fillKey: "defaultFill",
//   id: 3,
//   name: "New Jersey",
//   resourceCost: 15,
//   ownedBy: "Rockefeller",
//   isOwned: true
// },

const map = new Datamap({
  element: document.getElementById("container"),
  scope: "usa",
  geographyConfig: {
    highlightBorderColor: "#bada55",
    popupTemplate: function(geography, data) {
      const i = `<div class="hoverinfo">${data.id}. ${data.name}
      Owned by: ${data.ownedBy}
      Resource Cost: ${data.resourceCost} `;
      return i;
    },
    popupOnHover: true,
    highlightBorderWidth: 3
  },
  fills: {
    // notBrought: "#D3D3D3",
    broughtByPlayer: "#228B22",
    broughtByOpponent: "#B22222",
    //Grey
    defaultFill: "#D3D3D3"
  },
  data: states
});

function setLandColor(isOwned, ownedBy) {
  if (isOwned) {
    if (ownedBy === "Rockefeller") {
      return "broughtByPlayer";
    }

    return "broughtByOpponent";
  }

  return "defaultFill";
}

// const bombs = [
//   {
//     name: "Joe 4",
//     radius: 15,
//     yield: 100,
//     country: "USSR",
//     fillKey: "RUS",
//     significance: 'First fusion weapon test by the USSR (not "staged")',
//     date: "1953-08-12",
//     latitude: 10.07,
//     longitude: -81.43
//   }
// ];

// map.bubbles(bombs, {
//   popupTemplate: function(geo, data) {
//     return [
//       '<div class="hoverinfo">' + data.name,
//       "<br/>Payload: " + data.yield + " kilotons",
//       "<br/>Country: " + data.country + "",
//       "<br/>Date: " + data.date + "",
//       "</div>"
//     ].join("");
//   }
// });
