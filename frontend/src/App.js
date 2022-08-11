import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";

import User from "./users/components/Users"
import NewPlaces from './places/pages/NewPlace';
import MainNavigation from './shared/components/UIElements/Navigation/MainNavigation';

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation>
        <main>
          <Switch>
              <Route path="/users" exact>
                  <User/>  
              </Route>
              <Route path="/places/new" exact>
                  <NewPlaces/>  
              </Route>
          </Switch>
        </main>
      </MainNavigation>
  </BrowserRouter>
  
  )

}
export default App