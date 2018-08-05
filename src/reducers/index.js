import {combineReducers} from 'redux'
import products from './products';
import order from './order';

const reducers = combineReducers({
    products,
    order
});

export default reducers;