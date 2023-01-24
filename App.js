import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact>
          <First />
        </Route>
        <Route path="/second" exact>
          <Second />
        </Route>
        <Route path="/third" exact>
          <Third />
        </Route>
        <Route path="/fourth" exact>
          <Fourth />
        </Route>
      </BrowserRouter>
    </>
  );
}
