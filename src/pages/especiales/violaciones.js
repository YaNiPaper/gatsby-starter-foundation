import React from 'react';

import './publico/archivos/resources/ol.css';
import './publico/archivos/resources/fontawesome-all.min.css';
import './publico/archivos/resources/horsey.min.css';
import './publico/archivos/resources/ol3-search-layer.min.css';
import './publico/archivos/resources/ol-layerswitcher.css';
import './publico/archivos/resources/qgis2web.css';
import qgis2webExpressions from './publico/archivos/resources/qgis2web_expressions.js';
import polyfills from './publico/archivos/resources/polyfills.js';
import functions from './publico/archivos/resources/functions.js';
import ol from './publico/archivos/resources/ol.js';
import horsey from './publico/archivos/resources/horsey.min.js';
import ol3SearchLayer from './publico/archivos/resources/ol3-search-layer.js';
import olLayerSwitcher from './publico/archivos/resources/ol-layerswitcher.js';
import zmgMpos1 from './publico/archivos/layers/ZMG_mpos_1.js';
import zmgColonias2 from './publico/archivos/layers/ZMG_Colonias_2.js';
import delitosvsmujeresZmg3 from './publico/archivos/layers/delitosvsmujeres_zmg_3.js';
import zmgMpos1Style from './publico/archivos/styles/ZMG_mpos_1_style.js';
import zmgColonias2Style from './publico/archivos/styles/ZMG_Colonias_2_style.js';
import delitosvsmujeresZmg3Style from './publico/archivos/styles/delitosvsmujeres_zmg_3_style.js';
import layers from './publico/archivos/layers/layers.js';
import autolinker from './publico/archivos/resources/Autolinker.min.js';
import qgis2web from './publico/archivos/resources/qgis2web.js';

const SpecialPage = () => {
  return (
    <>
      <div>Feminicidios y violaciones en la Zona Metropolitana de Guadalajara</div>
      <div id="map">
        <div id="popup" className="ol-popup">
          <a href="#" id="popup-closer" className="ol-popup-closer"></a>
          <div id="popup-content"></div>
        </div>
      </div>
    </>
  );
};

export default SpecialPage;
