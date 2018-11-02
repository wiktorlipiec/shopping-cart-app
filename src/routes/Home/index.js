import React, { Component } from 'react';
import Header from '../../container/Header';
import Products from '../../container/Products/'

import Aux from '../../hoc/Aux/Aux';

class Home extends Component {
    render(){
        return(
            <Aux>
                <Header />
                <Products />
            </Aux>
        );
    }
}

export default Home;