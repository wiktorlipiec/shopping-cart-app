import { combineReducers } from 'redux';
//import cartReducer from './cart/reducers';
import productsReducer from './product/reducers';

const rootReducer = combineReducers({
    //cart: cartReducer,
    products: productsReducer,
});

export default rootReducer;