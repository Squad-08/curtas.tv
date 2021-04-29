import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from '../containers/Principal';
import Filme from '../../pages/Filme';
import PaginaInicial from '../../pages/PaginaInicial';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal(PaginaInicial)} />
                <Route path="/filme" exact component={Principal(Filme)} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;