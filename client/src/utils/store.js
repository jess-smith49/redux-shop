import {createStore} from 'redux';
import  {reducer} from './reducers';

//loading initial state
let preloadedState

preloadedState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
};

const Store = createStore(reducer, preloadedState)

export default Store;