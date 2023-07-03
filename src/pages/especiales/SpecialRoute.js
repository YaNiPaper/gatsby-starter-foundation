import React from 'react';
import { Route } from 'react-router-dom';
import SpecialPage from './SpecialPage';

const SpecialPageRoute = () => {
  return <Route exact path="/ruta-especial" component={SpecialPage} />;
};

export default SpecialPageRoute;
