import React from 'react';
import styled from 'styled-components';

const LogoBox = styled.div`
    img{
        width:50px;
        height: auto;
    }
`

const logo = props => (
    <LogoBox>
        <img src={props.image} alt="logo"/>
    </LogoBox>
);

export default logo;