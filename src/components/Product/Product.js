import React from 'react';
import styled from 'styled-components';

const ProductBox = styled.div`
    display:block;
    width: 300px;
    margin:25px auto;
`
const ImagesBox = styled.div`
    display: block;
    width: 100%;
    height: 300px;
    position: relative;
    background: ${props => `url(${props.background}) no-repeat top center`};
`

const CategoryBox = styled.span`
    display: table;
    background-color: black;
    color: white;
    position: absolute;
    padding: 8px 15px;
    right: 0;
    bottom: 0;
`

const NameBox = styled.h2`
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
`

const DescriptionBox = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const Product = props => {
    return(
        <ProductBox>
            <ImagesBox background={ props.background }>
                <CategoryBox>{ props.category }</CategoryBox>
            </ImagesBox>
            <NameBox>{ props.name }</NameBox>
            <DescriptionBox>{ props.description }</DescriptionBox>
        </ProductBox>
    );
}

export default Product;