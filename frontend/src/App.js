import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import User from "./users/components/Users"
import NewPlaces from './places/pages/NewPlace';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/users" exact>
            <User/>  
        </Route>
        <Route path="/places/new" exact>
            <NewPlaces/>  
        </Route>
    </Switch>
  </BrowserRouter>
  )

}
export default App