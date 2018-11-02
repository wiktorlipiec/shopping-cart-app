import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
    margin-top: 1rem;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: black;
    color: white;
    width: 100%;
    text-align: center;
    padding: 10px 15px;
    border:2px solid black;
    cursor: pointer;
    transition: all .4s;

    &:hover{
        background-color: white;
        color: black;
    }
`

const Button = props => {
    return(
        <ButtonBox type="button">{ props.title }</ButtonBox>
    );
}

export default Button;