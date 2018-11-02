import ProductActions from './actions';

const initialState = {
    products: {},
    status: '',
};

export default function ProductsReducer(state = initialState, action) {
    switch(action.type) {
    case ProductActions.FETCH_PRODUCTS_SUCCESS:
        return state = {
            ...state,
            products: action.payload,
            status: action.type,
        };
    case ProductActions.FETCH_PRODUCTS_FAILURE:
        return state = {
            ...state,
            status: action.type,
        }
    default:
        return state;
    }

}