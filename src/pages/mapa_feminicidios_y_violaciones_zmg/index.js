import React from 'react';

const MapComponent = () => {
  return (
    <>
      <div>Feminicidios y violaciones en la Zona Metropolitana de Guadalajara</div>

      <div id="map">
        <div id="popup" className="ol-popup">
          <a href="#" id="popup-closer" className="ol-popup-closer"></a>
          <div id="popup-content"></div>
        </div>
      </div>

      {/* Aquí van los enlaces a los archivos JavaScript y CSS importados */}
      <script src="./resources/qgis2web_expressions.js"></script>
      <script src="./resources/polyfills.js"></script>
      <script src="./resources/functions.js"></script>
      <script src="./resources/ol.js"></script>
      <script src="http://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList,URL"></script>
      <script src="./resources/horsey.min.js"></script>
      <script src="./resources/ol3-search-layer.js"></script>
      <script src="./resources/ol-layerswitcher.js"></script>
      <script src="./layers/ZMG_mpos_1.js"></script>
      <script src="./layers/ZMG_Colonias_2.js"></script>
      <script src="./layers/delitosvsmujeres_zmg_3.js"></script>
      <script src="./styles/ZMG_mpos_1_style.js"></script>
      <script src="./styles/ZMG_Colonias_2_style.js"></script>
      <script src="./styles/delitosvsmujeres_zmg_3_style.js"></script>
      <script src="./layers/layers.js" type="text/javascript"></script>
      <script src="./resources/Autolinker.min.js"></script>
      <script src="./resources/qgis2web.js"></script>
    </>
  );
};

export default MapComponent;
