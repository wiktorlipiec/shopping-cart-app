export default class ProductActions{
    static FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
    static FETCH_PRODUCTS_FAILURE= 'FETCH_PRODUCTS_FAILURE';

    static fetchProductsSuccess = products => ({
        type: ProductActions.FETCH_PRODUCTS_SUCCESS,
        payload: products,
    })
    static fetchProductsFailure = () => ({
        type: ProductActions.FETCH_PRODUCTS_FAILURE,
    })
}