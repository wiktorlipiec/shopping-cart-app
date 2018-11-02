import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { createGlobalStyle } from 'styled-components';

//import Layout from '../components/Layout/';

import Home from './Home';
import Miss404 from './Miss404';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

    html { 
        font-size: 62.5%; 
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

const App = () => (
    <div>
        <GlobalStyles />
        <Switch>
            <Route path="/" component={ Home } exact={ true } />
            <Route component={ Miss404 } />
        </Switch>
    </div>
);

export default App;
