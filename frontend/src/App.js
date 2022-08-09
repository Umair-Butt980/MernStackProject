import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import userComponent from "./users/components/Users"

const app = () => {
  return (
    <BrowserRouter>
      <Route path="/users" exact>
          <userComponent/>  
      </Route>
  </BrowserRouter>
  )

}
export default app