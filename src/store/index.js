
import { createStore , combineReducers} from "redux";
import { bankReducer } from "./reducers/bank-reducer";
import { productsReducer } from "./reducers/product-reducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const appReducer = combineReducers( { 
    bank : bankReducer , 
    products : productsReducer
})

export const store  =  createStore(appReducer , applyMiddleware(thunk)) ;  // Store fuction take a reducer as parameter 
