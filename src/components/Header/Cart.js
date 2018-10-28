import React from 'react';
import styled from 'styled-components';

const CartBox = styled.button`
    position: relative;
    width: 50px;
    height: 50px;
    background: transparent;
    border:0;
    cursor: pointer;
`
const CartCounter = styled.span`
    display:block;
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: grey;
    color: white;
    border-radius:50%;
    font-weight: bold;
    line-height: 18px;
    right: 0;
    bottom:0;
`

const cart = props => (
    <CartBox>
        <img src={ props.image } alt='cart' />
        <CartCounter>{ props.counter }</CartCounter>
    </CartBox>
)

export default cart;