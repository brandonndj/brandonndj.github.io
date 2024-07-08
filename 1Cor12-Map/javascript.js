/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      lat: 1.290270,
      lng: 103.851959
    },
    mapTypeId: "roadmap",
    maxZoom: 16,
    minZoom: 10,
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    radius: 75,
  });


  const boundaryCoords = [

    {
      lng: 103.8613145,
      lat: 1.3694523
    },
    {
      lng: 103.8593404,
      lat: 1.3634458
    },
    {
      lng: 103.8569372,
      lat: 1.3569246
    },
    {
      lng: 103.8570659,
      lat: 1.35272
    },
    {
      lng: 103.8608854,
      lat: 1.3432384
    },
    {
      lng: 103.864619,
      lat: 1.3443109
    },
    {
      lng: 103.866121,
      lat: 1.3440964
    },
    {
      lng: 103.8704984,
      lat: 1.342509
    },
    {
      lng: 103.8708417,
      lat: 1.3448258
    },
    {
      lng: 103.8715713,
      lat: 1.3467135
    },
    {
      lng: 103.8738458,
      lat: 1.3499742
    },
    {
      lng: 103.8725583,
      lat: 1.3516045
    },
    {
      lng: 103.8726871,
      lat: 1.3532778
    },
    {
      lng: 103.8730304,
      lat: 1.354951
    },
    {
      lng: 103.8736741, lat: 1.3558949
    },
    {
      lng: 103.8739316,
      lat: 1.3569246
    },
    {
      lng: 103.8740604,
      lat: 1.3585978
    },
    {
      lng: 103.8731162,
      lat: 1.3621588
    },
    {
      lng: 103.8736312,
      lat: 1.3632742
    },
    {
      lng: 103.8746612,
      lat: 1.3651191
    },
    {
      lng: 103.8764636,
      lat: 1.3697955
    },
    {
      lng: 103.8686101,
      lat: 1.3718978
    },
    {
      lng: 103.866636,
      lat: 1.3717262
    },
    {
      lng: 103.8653486,
      lat: 1.3708681
    },
    {
      lng: 103.8613145,
      lat: 1.3694523
    },

  ];


  map.data.add({
    geometry: new google.maps.Data.Polygon([
      boundaryCoords,
    ]),
  });

  loadCounter();

  document
    .getElementById("load-counter")
    .addEventListener("click", loadCounter);
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);
}

function loadCounter(){
  var addressArray = getPoints();
  var addressCount = addressArray.length;

  var positiveCount = 0;
  var negativeCount = 0;

  newBoundary = [
    new google.maps.LatLng(1.3694523,103.8613145),
    new google.maps.LatLng(1.3634458,103.8593404),
    new google.maps.LatLng(1.3569246,103.8569372),
    new google.maps.LatLng(1.35272,103.8570659),
    new google.maps.LatLng(1.3432384,103.8608854),
    new google.maps.LatLng(1.3443109,103.864619),
    new google.maps.LatLng(1.3440964,103.866121),
    new google.maps.LatLng(1.342509,103.8704984),
    new google.maps.LatLng(1.3448258,103.8708417),
    new google.maps.LatLng(1.3467135,103.8715713),
    new google.maps.LatLng(1.3499742,103.8738458),
    new google.maps.LatLng(1.3516045,103.8725583),
    new google.maps.LatLng(1.3532778,103.8726871),
    new google.maps.LatLng(1.354951,103.8730304),
    new google.maps.LatLng(1.3558949,103.8736741),
    new google.maps.LatLng(1.3569246,103.8739316),
    new google.maps.LatLng(1.3585978,103.8740604),
    new google.maps.LatLng(1.3621588,103.8731162),
    new google.maps.LatLng(1.3632742,103.8736312),
    new google.maps.LatLng(1.3651191,103.8746612),
    new google.maps.LatLng(1.3697955,103.8764636),
    new google.maps.LatLng(1.3718978,103.8686101),
    new google.maps.LatLng(1.3717262,103.866636),
    new google.maps.LatLng(1.3708681,103.8653486),
    new google.maps.LatLng(1.3694523,103.8613145),
   ];

    var newBoundaryMap = new google.maps.Polygon({
      paths: newBoundary
  });

  for(a = 0; a < addressCount; a++) {
    
    if (google.maps.geometry.poly.containsLocation(addressArray[a],newBoundaryMap))
    {
      positiveCount++;
    }

    else negativeCount++;

  } 


    document.getElementById("countInside").innerHTML = (Math.round(positiveCount/addressCount * 100) );
    document.getElementById("countOutside").innerHTML = (Math.round(negativeCount/addressCount * 100) );

}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 30);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [new google.maps.LatLng(1.354927172, 103.8485451),
    new google.maps.LatLng(1.375025135, 103.8710748),
    new google.maps.LatLng(1.35673539, 103.8435198),
    new google.maps.LatLng(1.368226999, 103.8755488),
    new google.maps.LatLng(1.360273353, 103.8762311),
    new google.maps.LatLng(1.366935422, 103.8712847),
    new google.maps.LatLng(1.373752132, 103.8706448),
    new google.maps.LatLng(1.36232638, 103.8600944),
    new google.maps.LatLng(1.374409593, 103.8709312),
    new google.maps.LatLng(1.35755258, 103.8731405),
    new google.maps.LatLng(1.396647105, 103.8936418),
    new google.maps.LatLng(1.386451054, 103.8672672),
    new google.maps.LatLng(1.35230889, 103.8810885),
    new google.maps.LatLng(1.36721571, 103.88707),
    new google.maps.LatLng(1.38813865, 103.8791625),
    new google.maps.LatLng(1.35755258, 103.8731405),
    new google.maps.LatLng(1.311250291, 103.9008801),
    new google.maps.LatLng(1.38813865, 103.8791625),
    new google.maps.LatLng(1.368034523, 103.8394256),
    new google.maps.LatLng(1.371907883, 103.8970129),
    new google.maps.LatLng(1.351205269, 103.8677695),
    new google.maps.LatLng(1.369513787, 103.868118),
    new google.maps.LatLng(1.345941268, 103.8533221),
    new google.maps.LatLng(1.355316757, 103.8785167),
    new google.maps.LatLng(1.309931226, 103.887961),
    new google.maps.LatLng(1.351205269, 103.8677695),
    new google.maps.LatLng(1.334068254, 103.8732659),
    new google.maps.LatLng(1.346265987, 103.8731998),
    new google.maps.LatLng(1.36385871, 103.8638928),
    new google.maps.LatLng(1.35755258, 103.8731405),
    new google.maps.LatLng(1.363598743, 103.8844654),
    new google.maps.LatLng(1.35831238, 103.8420882),
    new google.maps.LatLng(1.36822021, 103.8529789),
    new google.maps.LatLng(1.287963807, 103.8162431),
    new google.maps.LatLng(1.346068882, 103.8618654),
    new google.maps.LatLng(1.410757872, 103.8310812),
    new google.maps.LatLng(1.346068882, 103.8618654),
    new google.maps.LatLng(1.334068254, 103.8732659),
    new google.maps.LatLng(1.346265987, 103.8731998),
    new google.maps.LatLng(1.351205269, 103.8677695),
    new google.maps.LatLng(1.351003043, 103.8634346),
    new google.maps.LatLng(1.371992234, 103.8745903),
    new google.maps.LatLng(1.387047545, 103.8615314),
    new google.maps.LatLng(1.345455518, 103.8792021),
    new google.maps.LatLng(1.336746107, 103.8576159),
    new google.maps.LatLng(1.362383119, 103.8664044),
    new google.maps.LatLng(1.352197883, 103.8816354),
    new google.maps.LatLng(1.399660814, 103.9072345),
    new google.maps.LatLng(1.363598743, 103.8844654),
    new google.maps.LatLng(1.371992234, 103.8745903),
    new google.maps.LatLng(1.357836229, 103.8648045),
    new google.maps.LatLng(1.351205269, 103.8677695),
    new google.maps.LatLng(1.361311243, 103.8633838),
    new google.maps.LatLng(1.345843184, 103.8677396),
    new google.maps.LatLng(1.345070601, 103.8825419),
    new google.maps.LatLng(1.336746107, 103.8576159),
    new google.maps.LatLng(1.335210354, 103.8461629),
    new google.maps.LatLng(1.35896263, 103.8637288),
    new google.maps.LatLng(1.368678327, 103.8634164),
    new google.maps.LatLng(1.345323326, 103.8565811),
    new google.maps.LatLng(1.314775857, 103.8466805),
    new google.maps.LatLng(1.365583003, 103.8708504),
    new google.maps.LatLng(1.38522117, 103.8593512),
    new google.maps.LatLng(1.366100695, 103.8653589),
    new google.maps.LatLng(1.358898535, 103.8645664),
    new google.maps.LatLng(1.358898535, 103.8645664),
    new google.maps.LatLng(1.387444249, 103.9113942),
    new google.maps.LatLng(1.309243391, 103.8426106),
    new google.maps.LatLng(1.357591194, 103.862901),
    new google.maps.LatLng(1.361732847, 103.8620218),
    new google.maps.LatLng(1.317327989, 103.8369869),
    new google.maps.LatLng(1.359737161, 103.86761),
    new google.maps.LatLng(1.387214452, 103.8955253),
    new google.maps.LatLng(1.374301157, 103.872556),
    new google.maps.LatLng(1.35417533, 103.8659671),
    new google.maps.LatLng(1.380242573, 103.8720467),
    new google.maps.LatLng(1.358257395, 103.8664472),
    new google.maps.LatLng(1.352934458, 103.8659708),
    new google.maps.LatLng(1.36850358, 103.8647117),
    new google.maps.LatLng(1.35230889, 103.8810885),
    new google.maps.LatLng(1.346068882, 103.8618654),
    new google.maps.LatLng(1.393862322, 103.8885403),
    new google.maps.LatLng(1.366200368, 103.8487784),
    new google.maps.LatLng(1.366457463, 103.8634392),
    new google.maps.LatLng(1.350347284, 103.863322),
    new google.maps.LatLng(1.310048006, 103.8846782),
    new google.maps.LatLng(1.353288108, 103.8657964),
    new google.maps.LatLng(1.366403995, 103.8869283),
    new google.maps.LatLng(1.342654575, 103.8758006),
    new google.maps.LatLng(1.342654575, 103.8758006),
    new google.maps.LatLng(1.368377793, 103.8392233),
    new google.maps.LatLng(1.368377793, 103.8392233),
    new google.maps.LatLng(1.376280065, 103.9013876),
    new google.maps.LatLng(1.353288108, 103.8657964),
    new google.maps.LatLng(1.376280065, 103.9013876),
    new google.maps.LatLng(1.359737161, 103.86761),
    new google.maps.LatLng(1.350599267, 103.8685149),
    new google.maps.LatLng(1.361097182, 103.8647302),
    new google.maps.LatLng(1.311569257, 103.9312218),
    new google.maps.LatLng(1.350769353, 103.8722961),
    new google.maps.LatLng(1.309215476, 103.8629159),
    new google.maps.LatLng(1.318539522, 103.9038365),
    new google.maps.LatLng(1.375884494, 103.8342266),
    new google.maps.LatLng(1.366100695, 103.8653589),
    new google.maps.LatLng(1.349813538, 103.8807455),
    new google.maps.LatLng(1.351205269, 103.8677695),
    new google.maps.LatLng(1.396040552, 103.8745546),
    new google.maps.LatLng(1.44623077, 103.8199939),
    new google.maps.LatLng(1.375182544, 103.900406),
    new google.maps.LatLng(1.34801253, 103.8846204),
    new google.maps.LatLng(1.372880992, 103.8773597),
    new google.maps.LatLng(1.360674162, 103.8433536),
    new google.maps.LatLng(1.354929782, 103.8736399),
    new google.maps.LatLng(1.367266293, 103.8710707),
    new google.maps.LatLng(1.333204067, 103.8669926),
    new google.maps.LatLng(1.367742239, 103.864655),
    new google.maps.LatLng(1.371477831, 103.8458688),
    new google.maps.LatLng(1.349453719, 103.866976),
    new google.maps.LatLng(1.366323266, 103.8740539),
    new google.maps.LatLng(1.358355538, 103.8303978),
    new google.maps.LatLng(1.357982947, 103.8260423),
    new google.maps.LatLng(1.367004946, 103.8624465),
    new google.maps.LatLng(1.353493566, 103.8670455),
    new google.maps.LatLng(1.367742239, 103.864655),
    new google.maps.LatLng(1.353876939, 103.8695107),
    new google.maps.LatLng(1.353876939, 103.8695107),
    new google.maps.LatLng(1.336710985, 103.8454729),
    new google.maps.LatLng(1.371477831, 103.8458688),
    new google.maps.LatLng(1.357982947, 103.8260423),
    new google.maps.LatLng(1.336710985, 103.8454729),
    new google.maps.LatLng(1.38071226, 103.9030817),
    new google.maps.LatLng(1.348897145, 103.8672798),
    new google.maps.LatLng(1.358969295, 103.867134),
    new google.maps.LatLng(1.35556605, 103.8635494),
    new google.maps.LatLng(1.340352129, 103.8411993),
    new google.maps.LatLng(1.353744081, 103.8861593),
    new google.maps.LatLng(1.3510030432062, 103.86343461806),
    new google.maps.LatLng(1.38924471342298, 103.876556317593),
    new google.maps.LatLng(1.36364162554593, 103.884523715616),
    new google.maps.LatLng(1.36150390894352, 103.861046660698),
    new google.maps.LatLng(1.33480185095908, 103.808050182713),
    new google.maps.LatLng(1.35260972084146, 103.866222094228),
    new google.maps.LatLng(1.36221224340847, 103.870599011763),
    new google.maps.LatLng(1.34431052041231, 103.869850825419),
    new google.maps.LatLng(1.35318021089479, 103.867119538611),
    new google.maps.LatLng(1.35526639245446, 103.863585037975),
    new google.maps.LatLng(1.35328810773066, 103.865796441043),
    new google.maps.LatLng(1.36307225746, 103.868082537171),
    new google.maps.LatLng(1.31736223877921, 103.82875324222),
  ];
}

window.initMap = initMap;
