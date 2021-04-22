import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanageMap';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact/>
        <Route path="/orphanage" component={OrphanageMap} exact/>
      </Switch>
    </BrowserRouter>
  );
}