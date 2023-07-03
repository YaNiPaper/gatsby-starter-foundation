import React from 'react';
import MyHTMLContent from './publico/archivos/feminicidios_y_violaciones_en_zmg.html';

const MyComponent = () => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: MyHTMLContent }} />
    </div>
  );
};

export default MyComponent;
