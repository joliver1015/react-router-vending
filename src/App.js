import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine"
import Soda from "./Soda";
import Starburst from "./Starburst";
import Chips from "./Chips";
import NavBar from "./NavBar"

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path="/" exact>
            <VendingMachine />
          </Route>
          <Route  path="/chips" exact>
            <Chips />
          </Route>
          <Route path="/soda" exact >
            <Soda />
          </Route>
          <Route  path="/starburst" exact>
            <Starburst />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
