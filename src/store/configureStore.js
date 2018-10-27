import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../modules/index.js';

const configureStore = (history, initialState = {}) => {
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension && process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f
        )
    );

    return store;
};

export default configureStore;
