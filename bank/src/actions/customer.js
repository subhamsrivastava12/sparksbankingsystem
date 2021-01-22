import * as api from '../api';
import {FETCH,UPDATE} from './../actiontype';
export const getCustomers =() =>async(dispatch)=>{
    try{
        const {data} = await api.fetchCustomers();
        dispatch({type:FETCH,payload:data});
    }
    catch(error){
        console.log(error.message);
    }
}
export const getCustomer =(id) =>async(dispatch)=>{
    try{
        const {data} = await api.fetchCustomer(id);
        dispatch({type:FETCH,payload:data});
    }
    catch(error){
        console.log(error.message);
    }
}

export const updateCustomer=(id1,name1,id2,name2,money)=>async(dispatch)=>{
    try{
        const {data} = await api.updateCustomer(id1,name1,id2,name2,money);
        dispatch({type:UPDATE,payload:data})

    }catch(error){
        console.log(error);
    }
}