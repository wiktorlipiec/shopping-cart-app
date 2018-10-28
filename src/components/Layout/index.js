import React from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');

    html { 
        font-size: 62.5%; 
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Raleway', sans-serif;
    }
`

const LayoutCointainer = styled.div`
    margin: 0;
`

const layout = props => (
    <LayoutCointainer>
        {props.children}
    </LayoutCointainer>
);

export default layout;