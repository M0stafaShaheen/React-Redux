
import { GET_PRODUCTS } from "../actions/product-actions";
import { ADD_PRODUCT } from "../actions/product-actions";

export const productsReducer = (state = [{id:1  , title: 'product1'}] , action) => { 

    switch(action.type) { 
        case GET_PRODUCTS :
            return [...action.payload] ; 
        case ADD_PRODUCT:
            return [...state , action.payload]; 
        default : 
            return state ; 
    }
}