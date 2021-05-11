import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { history } from "../routes/history";
import Principal from "../containers/Principal";
import Curta from "../../pages/Curta";
import PaginaInicial from "../../pages/PaginaInicial";
import PaginaInexistente from "../../pages/PaginaInexistente";
import FeitoPor from "../../pages/FeitoPor";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/curtas.tv"
              exact
              component={Principal(PaginaInicial)}
            />
            <Route path="/curtas.tv/:id" component={Principal(Curta)} />
            <Route path="/feito-por" component={Principal(FeitoPor)} />
            <Route path="*" component={Principal(PaginaInexistente)} />
          </Switch>
        </BrowserRouter>
      </Router>
    </Provider>
  );
};

export default Routes;
