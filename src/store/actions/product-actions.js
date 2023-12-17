import { useDispatch } from "react-redux";
export const ADD_PRODUCT = "ADD_PRODUCT"  ; 
export const GET_PRODUCTS = "GET_PRODUCTS" ; 

// store - reducers - action 

export const addProduct  = function(product)  {  

    return  { 
        type : ADD_PRODUCT , 
        payload : product
    }
}

export const getProducts  = function(products)  { 
    return { 
        typr : GET_PRODUCTS , 
        payload : products
    }
}

export const fetchProducts = () =>  { 
    return async (dispatch) => { 
        const res =  await fetch('https://fakestoreapi.com/products') ; 
        const data = await res.json() ; 
        console.log(data) ; 
        dispatch(getProducts(data))  ;
    }
} 