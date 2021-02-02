const States = {
    AZ: {
        code: "AZ",
        name: "Arizona",
        resource_cost: 15,
        is_owned: false
    },
    CO: {
        code: "CO",
        name: "Colorado",
        resource_cost: 15,
        is_owned: false
    },
    DE: {
        code: "DE",
        name: "Delaware",
        resource_cost: 15,
        is_owned: false
    },
    FL: {
        code: "FL",
        name: "Florida",
        resource_cost: 15,
        is_owned: false
    },
    GA: {
        code: "GA",
        name: "Georgia",
        resource_cost: 15,
        is_owned: false
    },
    HI: {
        code: "HI",
        name: "Hawaii",
        resource_cost: 15,
        is_owned: false
    },
    ID: {
        code: "ID",
        name: "Idaho",
        resource_cost: 15,
        is_owned: true
    },
    IL: {
        code: "IL",
        name: "Illinois",
        resource_cost: 15,
        is_owned: false
    },
    IN: {
        code: "IN",
        name: "Indiana",
        resource_cost: 15,
        is_owned: false
    },
    IA: {
        code: "IA",
        name: "Iowa",
        resource_cost: 15,
        is_owned: false
    },
    KS: {
        code: "KS",
        name: "Kansas",
        resource_cost: 15,
        is_owned: false
    },
    KY: {
        code: "KY",
        name: "Kentucky",
        resource_cost: 15,
        is_owned: false
    },
    LA: {
        code: "LA",
        name: "Louisanna",
        resource_cost: 15,
        is_owned: false
    },
    MD: {
        code: "MD",
        name: "Maryland",
        resource_cost: 15,
        is_owned: false
    },
    ME: {
        code: "ME",
        name: "Maine",
        resource_cost: 15,
        is_owned: false
    },
    MA: {
        code: "MA",
        name: "Massachusetts",
        resource_cost: 15,
        is_owned: false
    },
    MN: {
        code: "MN",
        name: "Minnesota",
        resource_cost: 15,
        is_owned: false
    },
    MI: {
        code: "MI",
        name: "Michigan",
        resource_cost: 15,
        is_owned: false
    },
    MS: {
        code: "MS",
        name: "Mississippi",
        resource_cost: 15,
        is_owned: false
    },
    MO: {
        code: "MO",
        name: "Missouri",
        resource_cost: 15,
        is_owned: false
    },
    MT: {
        code: "MT",
        name: "Montana",
        resource_cost: 15,
        is_owned: true
    },
    NC: {
        code: "NC",
        name: "North Carolina",
        resource_cost: 15,
        is_owned: false
    },
    NE: {
        code: "NE",
        name: "Nebraska",
        resource_cost: 15,
        is_owned: false
    },
    NV: {
        code: "NV",
        name: "Nevada",
        resource_cost: 15,
        is_owned: false
    },
    NH: {
        code: "NH",
        name: "New Hampshire",
        resource_cost: 15,
        is_owned: false
    },
    NJ: {
        code: "NJ",
        name: "New Jersey",
        resource_cost: 15,
        is_owned: false
    },
    NY: {
        code: "NY",
        name: "New York",
        resource_cost: 15,
        is_owned: false
    },
    ND: {
        code: "ND",
        name: "North Dakota",
        resource_cost: 15,
        is_owned: false
    },
    NM: {
        code: "NM",
        name: "New Mexico",
        resource_cost: 15,
        is_owned: false
    },
    OH: {
        code: "OH",
        name: "Ohio",
        resource_cost: 15,
        is_owned: false
    },
    OK: {
        code: "OK",
        name: "Oklahoma",
        resource_cost: 15,
        is_owned: false
    },
    OR: {
        code: "OR",
        name: "Oregon",
        resource_cost: 15,
        is_owned: false
    },
    PA: {
        code: "PA",
        name: "Pennsylvania",
        resource_cost: 15,
        is_owned: false
    },
    RI: {
        code: "RI",
        name: "Rhode Island",
        resource_cost: 15,
        is_owned: false
    },
    SC: {
        code: "SC",
        name: "South Carolina",
        resource_cost: 15,
        is_owned: false
    },
    SD: {
        code: "SD",
        name: "South Dakota",
        resource_cost: 15,
        is_owned: false
    },
    TN: {
        code: "TN",
        name: "Tennessee",
        resource_cost: 15,
        is_owned: false
    },
    TX: {
        code: "TX",
        name: "Texas",
        resource_cost: 15,
        is_owned: false
    },
    UT: {
        code: "UT",
        name: "Utah",
        resource_cost: 15,
        is_owned: false
    },
    WI: {
        code: "WI",
        name: "Wisconsin",
        resource_cost: 15,
        is_owned: false
    },
    VA: {
        code: "VA",
        name: "Virginia",
        resource_cost: 15,
        is_owned: false
    },
    VT: {
        code: "VT",
        name: "Vermont",
        resource_cost: 15,
        is_owned: false
    },
    WA: {
        code: "WA",
        name: "Washington",
        resource_cost: 15,
        is_owned: true
    },
    WV: {
        code: "WV",
        name: "West Virginia",
        resource_cost: 15,
        is_owned: false
    },
    WY: {
        code: "WY",
        name: "Wyoming",
        resource_cost: 15,
        is_owned: false
    },
    CA: {
        code: "CA",
        name: "California",
        resource_cost: 15,
        is_owned: false
    },
    CT: {
        code: "CT",
        name: "Connecticut",
        resource_cost: 15,
        is_owned: false
    },
    AK: {
        code: "AK",
        name: "Alaska",
        resource_cost: 15,
        is_owned: false
    },
    AR: {
        code: "AR",
        name: "Arizona",
        resource_cost: 15,
        is_owned: false
    },
    AL: {
        code: "AL",
        name: "Alabama",
        resource_cost: 15,
        is_owned: false
    }
};

let lands = [];
for (const property in States) {
    lands.push(States[property]);
}

