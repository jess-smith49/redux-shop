import {createStore} from 'redux';
import  reducer from './reducers';

//loading initial state//not required 
/*let preloadedState

preloadedState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
};/*/
//dont need
//const Store = createStore(reducer, preloadedState)

export default createStore(reducer);