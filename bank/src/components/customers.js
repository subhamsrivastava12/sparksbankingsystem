import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {getCustomers,updateCustomer} from './../actions/customer'; 
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import './customers.css';
import NavBar from './navbar';

import {Table,Button} from 'react-bootstrap';
import { Alert } from 'reactstrap';

/**
* @author
* @function Customers
**/

const Customers = (props) => {
    const dispatch =useDispatch();
    const customers=useSelector((state)=>state.customers);

   
    useEffect(() => {
        dispatch(getCustomers());

        },[dispatch]);
  return(
      <div>
        
          <NavBar/>
          <div className="customersbody">
           <div >
            <h2 className="cstitle">Customers Details</h2>
          </div>
  {customers.map((customer)=>(
    <div className="customers">
      <Alert color="info">
        <div >
          <div className="alertcontent">
      <h2 className="cn">{customer.name}</h2>
       <h2 className="ce">{customer.email}</h2>
       </div>
        <div className="cb" > <Link to={{pathname:`/customer`,cid:customer._id,amount:customer.balance, }} >
                                    <Button  className="details" >
                                      Account Details
                                    </Button>
                                    </Link>
         </div>
         </div>
         </Alert>
  </div>

        
        
     

      ))
    }
    
    </div>  
   </div>
  
 
  );
}

export default Customers;