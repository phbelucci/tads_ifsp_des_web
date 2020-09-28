import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import { Inicio, Contato, Sobre } from '../pages/index';
export function Routes({postosIn}) {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Inicio}/>
            <Route path="/contato" component={Contato} />
            <Route path="/sobre" component={Sobre} />
        </BrowserRouter>
    )
}

export default Routes;