import axios from 'axios';

// default state
const initialState = {
    products: []
};


// Actions
const GET_PRODUCTS = 'GET_PRODUCTS';


// Action Creators
 export function getProducts() {
     return {
         type: GET_PRODUCTS,
         payload: axios.get('http://localhost:3030/api/getProducts').then(res => {
             return res.data
         }).catch(err => console.log('get products error', err))
            
     }
 };


// Reducer
export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCTS + '_FULFILLED':
            return Object.assign({}, state, { products: action.payload });

       
        default: return state;


    }
};

