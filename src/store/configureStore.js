import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}
export const store = createStore(rootReducer, applyMiddleware(...middleware));
