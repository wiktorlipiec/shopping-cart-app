import React, { Component } from 'react';
//import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsMiddleware from '../../modules/product/middleware';

import Container from '../../components/Grid/container';
import Product from '../../components/Product/Product'

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchProducts: () => ProductsMiddleware.fetchProducts(),
    }, dispatch)
);

const mapStateToProps = state => ({
    allProducts: state.products,
});

class Products extends Component{

    componentDidMount(){
        this.props.fetchProducts();
    }
    
    render(){
        const { allProducts } = this.props;

        return(
            <Container flex>
                {allProducts.products.length && allProducts.products.map((product,index) => {
                    return <Product key={ index } 
                                    background={ product.ProductPicUrl }
                                    price={ product.Price }
                                    category={ product.Category }
                                    name={ product.Name }
                                    description={ product.Description }
                            />
                })}
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);