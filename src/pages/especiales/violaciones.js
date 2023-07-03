import React from 'react';

import './resources/ol.css';
import './resources/fontawesome-all.min.css';
import './resources/horsey.min.css';
import './resources/ol3-search-layer.min.css';
import './resources/ol-layerswitcher.css';
import './resources/qgis2web.css';
import qgis2webExpressions from './resources/qgis2web_expressions.js';
import polyfills from './resources/polyfills.js';
import functions from './resources/functions.js';
import ol from './resources/ol.js';
import horsey from './resources/horsey.min.js';
import ol3SearchLayer from './resources/ol3-search-layer.js';
import olLayerSwitcher from './resources/ol-layerswitcher.js';
import zmgMpos1 from './layers/ZMG_mpos_1.js';
import zmgColonias2 from './layers/ZMG_Colonias_2.js';
import delitosvsmujeresZmg3 from './layers/delitosvsmujeres_zmg_3.js';
import zmgMpos1Style from './styles/ZMG_mpos_1_style.js';
import zmgColonias2Style from './styles/ZMG_Colonias_2_style.js';
import delitosvsmujeresZmg3Style from './styles/delitosvsmujeres_zmg_3_style.js';
import layers from './layers/layers.js';
import autolinker from './resources/Autolinker.min.js';
import qgis2web from './resources/qgis2web.js';

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
