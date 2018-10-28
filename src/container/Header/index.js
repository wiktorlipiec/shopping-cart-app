import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../../components/Header/Logo';
import Cart from '../../components/Header/Cart';

import logoImage from '../../assets/images/shop.svg';
import cartImage from '../../assets/images/shopping-cart.svg';

const HeaderContainer = styled.header`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: absolute;
    height: 80px;
    width: 100%;
    left:0;
    top:0;
    padding: 0 30px;
    margin: 0 auto;
    box-shadow: -2px -1px 14px -4px rgba(0,0,0,0.75);
`

class Header extends Component {
    render(){
        return(
            <HeaderContainer>
                <Logo image={logoImage}/>
                <Cart image={cartImage} counter="4"/>
            </HeaderContainer>
        );
    }
}

export default Header;