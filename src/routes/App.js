import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
// import { injectGlobal } from 'styled-components';

//import Layout from '../components/Layout/';

import Home from './Home';
import Miss404 from './Miss404';

// injectGlobal`
//     //@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');

//     html { 
//         font-size: 62.5%; 
//         box-sizing: border-box;
//     }

//     body {
//         padding: 0;
//         margin: 0;
//         font-family: 'Raleway', sans-serif;
//     }
// `;

const App = () => (
    <div>
        <Switch>
            <Route path="/" component={ Home } exact={ true } />
            <Route component={ Miss404 } />
        </Switch>
    </div>
);

export default App;
