
import React from 'react';

const SpecialPage = () => {
  // Código de tu componente SpecialPage
  return (
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="stylesheet" href="./resources/ol.css">
<link rel="stylesheet" href="./resources/fontawesome-all.min.css">
<link rel="stylesheet" type="text/css" href="./resources/horsey.min.css">
<link rel="stylesheet" type="text/css" href="./resources/ol3-search-layer.min.css">
<link rel="stylesheet" href="./resources/ol-layerswitcher.css">
<link rel="stylesheet" href="./resources/qgis2web.css">
<style>
.search-layer {
top: 65px;
left: .5em;
}
.ol-touch .search-layer {
top: 80px;
}
</style>
<style>
html, body {
    background-color: #ffffff;
}
.ol-control button {
    background-color: #f8f8f8 !important;
    color: #000000 !important;
    border-radius: 0px !important;
}
.ol-zoom, .geolocate, .gcd-gl-control .ol-control {
    background-color: rgba(255,255,255,.4) !important;
    padding: 3px !important;
}
.ol-scale-line {
    background: none !important;
}
.ol-scale-line-inner {
    border: 2px solid #f8f8f8 !important;
    border-top: none !important;
    background: rgba(255, 255, 255, 0.5) !important;
    color: black !important;
}
</style>
<style>
html, body, #map {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>
<title></title>
</head>
<body>

<div>Feminicidios y violaciones en la Zona Metropolitana de Guadalajara</div>


<div id="map">
    <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
    </div>
</div>
<script src="./resources/qgis2web_expressions.js"></script>
<script src="./resources/polyfills.js"></script>
<script src="./resources/functions.js"></script>
<script src="./resources/ol.js"></script>
<script src="http://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList,URL"></script>
<script src="./resources/horsey.min.js"></script>
<script src="./resources/ol3-search-layer.js"></script>
<script src="./resources/ol-layerswitcher.js"></script>
<script src="./layers/ZMG_mpos_1.js"></script><script src="./layers/ZMG_Colonias_2.js"></script><script src="./layers/delitosvsmujeres_zmg_3.js"></script>
<script src="./styles/ZMG_mpos_1_style.js"></script><script src="./styles/ZMG_Colonias_2_style.js"></script><script src="./styles/delitosvsmujeres_zmg_3_style.js"></script>
<script src="./layers/layers.js" type="text/javascript"></script> 
<script src="./resources/Autolinker.min.js"></script>
<script src="./resources/qgis2web.js"></script>
</body>
  );
};

export default SpecialPage;

