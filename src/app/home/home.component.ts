import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  
public data : any = {
    "layers": [
      {
        "id": 0,
        "name": "Parks",
        "parentLayerId": -1,
        "defaultVisibility": true,
        "subLayerIds": [1, 2, 3, 4],
        "minScale": 0,
        "maxScale": 0
      },
      {
        "id": 1,
        "name": "TreeInventory",
        "parentLayerId": 0,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 2,
        "name": "Trails",
        "parentLayerId": 0,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 3,
        "name": "Pleasanton_Parks",
        "parentLayerId": 0,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 100000,
        "maxScale": 0
      },
      {
        "id": 4,
        "name": "Private_Parks",
        "parentLayerId": 0,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 5,
        "name": "Water",
        "parentLayerId": -1,
        "defaultVisibility": true,
        "subLayerIds": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        "minScale": 0,
        "maxScale": 0
      },
      {
        "id": 6,
        "name": "wControlValves",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 7,
        "name": "wFittings",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 8,
        "name": "wHydrants",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 9,
        "name": "wManholes",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 10,
        "name": "wMeters_CityWater",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 11,
        "name": "wOther_structs",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 12,
        "name": "wSystem_Valves",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 13,
        "name": "wTanks_Reservoirs",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 14,
        "name": "wWellsVaultsTurnoutsStationsPumps",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 15,
        "name": "wAbandonedPipes",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 16,
        "name": "wLaterals",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 17,
        "name": "wOther_pipes",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 18,
        "name": "wMains",
        "parentLayerId": 5,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 19,
        "name": "Sewer",
        "parentLayerId": -1,
        "defaultVisibility": true,
        "subLayerIds": [20, 21, 22, 23, 24, 25, 26, 27],
        "minScale": 0,
        "maxScale": 0
      },
      {
        "id": 20,
        "name": "ssCleanouts",
        "parentLayerId": 19,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 21,
        "name": "ssFittings",
        "parentLayerId": 19,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 22,
        "name": "ssManholes",
        "parentLayerId": 19,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 23,
        "name": "ssNetworkStructures",
        "parentLayerId": 19,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 24,
        "name": "ssAbandondedPipes",
        "parentLayerId": 19,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 25,
        "name": "ssOther_Structs",
        "parentLayerId": 19,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 26,
        "name": "ssGravityMains",
        "parentLayerId": 19,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 27,
        "name": "ssPressurizedMains",
        "parentLayerId": 19,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 28,
        "name": "Storm",
        "parentLayerId": -1,
        "defaultVisibility": true,
        "subLayerIds": [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
        "minScale": 0,
        "maxScale": 0
      },
      {
        "id": 29,
        "name": "sd_DischargePoints",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 30,
        "name": "sd_Fittings",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 31,
        "name": "sd_Inlets",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 32,
        "name": "sd_Manholes",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 33,
        "name": "sd_NetworkStructures",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 34,
        "name": "sd_OtherStructures",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 35,
        "name": "sd_Abandoned_Pipes",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 36,
        "name": "sd_Channel_Lines",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 37,
        "name": "sd_Culverts",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 38,
        "name": "sd_GravityMains",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 39,
        "name": "sd_OpenDitchs",
        "parentLayerId": 28,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 40,
        "name": "Transportation",
        "parentLayerId": -1,
        "defaultVisibility": true,
        "subLayerIds": [41, 42, 43, 44, 45],
        "minScale": 0,
        "maxScale": 0
      },
      {
        "id": 41,
        "name": "Sign_Records",
        "parentLayerId": 40,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 42,
        "name": "speedlimitsigns",
        "parentLayerId": 40,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 43,
        "name": "speed_limit",
        "parentLayerId": 40,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 44,
        "name": "signals",
        "parentLayerId": 40,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 45,
        "name": "STREET_LIGHTS",
        "parentLayerId": 40,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 46,
        "name": "Streets",
        "parentLayerId": -1,
        "defaultVisibility": true,
        "subLayerIds": [47, 48, 49, 50, 51],
        "minScale": 0,
        "maxScale": 0
      },
      {
        "id": 47,
        "name": "Address_Pts",
        "parentLayerId": 46,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 48,
        "name": "Centerline_1",
        "parentLayerId": 46,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 0,
        "maxScale": 0
      },
      {
        "id": 49,
        "name": "Face_of_Curb",
        "parentLayerId": 46,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 50,
        "name": "City_Limits",
        "parentLayerId": 46,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 0,
        "maxScale": 100000
      },
      {
        "id": 51,
        "name": "parcels",
        "parentLayerId": 46,
        "defaultVisibility": true,
        "minScale": 10000,
        "maxScale": 0,
        "subLayerIds": [52, 53]
      },
      {
        "id": 52,
        "name": "binit root 31",
        "parentLayerId": 51,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 53,
        "name": "binit root 32",
        "parentLayerId": 51,
        "defaultVisibility": true,
        "subLayerIds": [54],
        "minScale": 10000,
        "maxScale": 0
      },
      {
        "id": 54,
        "name": "binit root 41",
        "parentLayerId": 53,
        "defaultVisibility": true,
        "subLayerIds": null,
        "minScale": 10000,
        "maxScale": 0
      }
    ],
  }  
}
