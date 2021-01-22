
import {FETCH,UPDATE,FETCHCUS} from './../actiontype';
export default (customers=[],action)=>{
    switch(action.type){
        case FETCH:
            return action.payload;
        
        case FETCHCUS:
            return customers.map((customer)=> customer._id===action.payload._id?action.payload:customers)            
            
        
        case UPDATE:
            return customers.map((customer)=> customer._id===action.payload._id?action.payload:customers)            
        
        default:
            return customers;        
    }
} 