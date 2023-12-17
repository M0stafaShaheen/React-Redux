import {useSelector}  from 'react-redux' ; 
import { useDispatch } from 'react-redux';
import { addProduct, fetchProducts } from '../store/actions/product-actions';
import { useEffect } from 'react';

function Products ()
 { 
    
    const dispatch = useDispatch() ; 
    const products = useSelector((state) => state.products) ; 
    console.log(products) ;
    useEffect(()=>{
        dispatch(fetchProducts)
    } , [])
    return ( 
         
    <> 
    
        <h1>Products</h1>
        <button onClick={()=>dispatch(addProduct({id : 2 , title : 'product2'}))}>Add Product</button>
        { 
            products.map( (products) => (<h2 key={products.id}>{products.title}</h2>) )
        }
    </> 
    )
 }
    
    
export default Products ; 