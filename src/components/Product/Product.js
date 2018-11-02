import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const ProductBox = styled.div`
    display:block;
    width: 300px;
    margin:25px auto;
    box-shadow: 10px 10px 66px -27px rgba(0,0,0,0.25);
`
const ImagesBox = styled.div`
    display: block;
    width: 100%;
    height: 300px;
    position: relative;
    background: ${props => `url(${props.background}) no-repeat top center`};
`
const PriceBox = styled.span`
    display: table;
    background-color: black;
    color: white;
    position: absolute;
    padding: 8px 15px;
    left: 0;
    bottom: 0;
    font-size: 1.2rem;
    font-weight: 700;
`

const CategoryBox = styled.span`
    display: table;
    background-color: black;
    color: white;
    position: absolute;
    padding: 8px 15px;
    right: 0;
    bottom: 0;
    font-size: 1.2rem;
    font-weight: 700;
`

const NameBox = styled.h2`
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0 15px;
`

const DescriptionBox = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 0 15px;
`

const Product = props => {
    return(
        <ProductBox>
            <ImagesBox background={ props.background }>
                <CategoryBox>{ props.category }</CategoryBox>
                <PriceBox>{ `${ props.price } EUR` }</PriceBox>
            </ImagesBox>
            <NameBox>{ props.name }</NameBox>
            <DescriptionBox>{ props.description }</DescriptionBox>
            <Button title={ 'Add to cart' }></Button>
        </ProductBox>
    );
}

export default Product;