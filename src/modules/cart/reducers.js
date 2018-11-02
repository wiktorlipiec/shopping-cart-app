import CartActions from './actions';

const INITIAL_STATE = {
    cartProduct: {},
};

function CartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case CartActions.GET_CART:
        return { ...state };
    default:
        return state;
    }
}

export default CartReducer;