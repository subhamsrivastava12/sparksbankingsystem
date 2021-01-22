import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {getCustomers,getCustomer} from './../actions/customer'; 
import {useSelector} from 'react-redux';
import './customer.css';
import { Link } from "react-router-dom";
import NavBar from './navbar';
import {Table,Button,Card} from 'react-bootstrap';
import { Container, Row, Col,Alert } from 'reactstrap';

/**
* @author
* @function Customer
**/

const Customer = (props) => {
  const customers=useSelector((state)=>state.customers);
    
    const dispatch =useDispatch();
    useEffect(()=>{
     
    },[dispatch])
   
   
  return(
    <div>
      <NavBar/>
      

     <div className="customerbody" >
     
       {customers.filter((customer)=>customer._id===props.location.cid).map(customer=>(
       <Row>
                    <Col sm="12" md="12" lg="4">

        <div className="carddetail">
              <Card   border="info" className="cardpart">
  <Card.Body>
    <Card.Title>{customer.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{customer.email}</Card.Subtitle>
    <Card.Text>
   Account balance:{customer.balance}
    </Card.Text>
    <Card.Link ><Link to={{pathname:'/transfer', 
                             tid:customer._id ,
                             name:customer.name,
                             amount:props.location.amount}} >
                                    <Button   >
                                      Transfer Money
                                    </Button>
                                    </Link></Card.Link>
  </Card.Body>
</Card>

</div>
</Col>
   
<Col sm="12" md="12" lg="8">
            <div>
           <h4 className="history">Transaction History</h4>
            { customer.transfer.slice(0).reverse().map((object)=>(
                  <div className="tlist">
                                <Alert color="info">

                    <div className="instruction">
                  <span className="uhave">You have </span><span className="trans">{`${object.give?' Transferred ':' Accepted '}`}</span> <span className="amount"> <p>&#8377;{`${object.amount}`}</p> </span> <span>{`${object.give?' to ':' from '}`}</span><span className="donor">{`${object.name}`}</span>
                    </div>
                    </Alert>

                  </div>
              ))}
            

            </div>
            </Col>
            </Row>    
       ))}
  
  
  

  
     </div>
     
     </div>
     
  
 
  );
}

export default Customer;