 import './App.css'
import {useSelector , useDispatch} from  'react-redux' ; 
import { deposite, withdraw } from './store/actions/bank-actions';
import Products from './components/products'; 

function App() {
 const state  = useSelector(state => state.bank) ;
 const dispatch = useDispatch() ;  
 console.log(state)  ;
  return (
    <div className="App">
     <p>Bank Account Balance : {state} </p>
     <button onClick ={() => dispatch(withdraw(100))}>Withdraw</button>
     <button onClick = {()=> dispatch(deposite(100))}>Deposite</button>
      <Products /> 
    </div>
  );
}

export default App;
