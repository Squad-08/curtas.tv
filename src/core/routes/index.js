import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { history } from '../routes/history';
import Principal from '../containers/Principal';
import Filme from '../../pages/Filme';
import PaginaInicial from '../../pages/PaginaInicial';

const Routes = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Principal(PaginaInicial)} />
                        <Route path="/filme/:id" exact component={Principal(Filme)} />
                    </Switch>
                </BrowserRouter>
            </Router>
        </Provider>
    );
}

export default Routes;