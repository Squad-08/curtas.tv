import React from 'react';
import { BrowserRouter, Switch, Route, Router, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { history } from '../routes/history';
import Principal from '../containers/Principal';
import Filme from '../../pages/Filme';
import PaginaInicial from '../../pages/PaginaInicial';
import PaginaInexistente from '../../pages/PaginaInexistente';
import SobreNos from '../../pages/SobreNos';

const Routes = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Principal(PaginaInicial)} />
                        <Route path="/filme/:id" component={Principal(Filme)} />
                        <Route path='/pagina-inexistente' component={Principal(PaginaInexistente)} />
                        <Route path='/sobre-nos' component={Principal(SobreNos)} />
                        <Redirect from='*' to='/pagina-inexistente' />
                    </Switch>
                </BrowserRouter>
            </Router>
        </Provider>
    );
}

export default Routes;