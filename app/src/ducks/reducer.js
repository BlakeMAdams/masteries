import axios from 'axios';

// default state
const initialState = {
    products: [],
    cartNum: 0
};


// Actions
const GET_PRODUCTS = 'GET_PRODUCTS';
const CART_NUM = 'CART_NUM';


// Action Creators
 export function getProducts() {
     return {
         type: GET_PRODUCTS,
         payload: axios.get('http://localhost:3030/api/getProducts').then(res => {
             return res.data
         }).catch(err => console.log('get products error', err))
            
     }
 };

 export function cartNum(num) {
    return {
        type: CART_NUM,
        payload: num
    }
};


// Reducer
export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCTS + '_FULFILLED':
            return Object.assign({}, state, { products: action.payload });

        case CART_NUM:
            return Object.assign({}, state, { cartNum: action.payload });

       
        default: return state;


    }
};

