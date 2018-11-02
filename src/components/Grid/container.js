import React from 'react';
import styled, { css }  from 'styled-components';

const ContainerWrapper = styled.div`
    display: ${props => props.flex ? 'flex' : 'block'};
    max-width: 1070px;
    padding: 0 30px;
    margin: 100px auto;

    {${props => props.flex && css`
        flex-wrap: wrap;
        justify-content: space-between;
    `}}
    
`

const container = props => (
    <ContainerWrapper flex= { props.flex }>
        {props.children}
    </ContainerWrapper>
)

export default container;