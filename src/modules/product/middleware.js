import ProductActions from './actions';
import { apiProducts } from '../../shared/api.config';

export default class ProductMiddleware{
    static fetchProducts = () => dispatch => {
        apiProducts().then(res => {
            console.log(res.data);
            dispatch(ProductActions.fetchProductsSuccess(res.data))
        }).catch(err => {
            console.log('Error');
            dispatch(ProductActions.fetchProductsFailure())
        });
    }
}