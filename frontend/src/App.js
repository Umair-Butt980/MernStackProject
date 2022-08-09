import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import User from "./users/components/Users"
import NewPlaces from './places/pages/NewPlace';

const App = () => {
  return (
    <BrowserRouter>
        <Route path="/users" exact>
            <User/>  
        </Route>
        <Route path="/places/new" exact>
            <NewPlaces/>  
        </Route>
  </BrowserRouter>
  )

}
export default App