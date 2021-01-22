import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {getCustomers,updateCustomer} from './../actions/customer'; 
import {useSelector} from 'react-redux';
import ReactDOM from 'react-dom';

import { Link, Redirect } from "react-router-dom";
import NavBar from './navbar';
import './transfer.css';
import { Spinner,Alert } from 'reactstrap';

import {Table,Button,Form,Row,Col} from 'react-bootstrap';
/**
* @author
* @function Customers
**/

const Transfer = (props) => {
    const dispatch =useDispatch();
    const [on,setOn]=useState(true);
    const [c,setC]=useState(false);

    const [trid,setTrid]=useState('');
    const [select,setSelect]=useState([]);

    const customers=useSelector((state)=>state.customers);
    const [amount,setAmount]=useState(0);
    const [aid,setAid]=useState('');
    const [name1,setName1]=useState('');
    const [name2,setName2]=useState('');


    const events=(e)=>{
        if(aid!==''){
          if(props.location.amount-amount>=0 && amount>0 && aid!==trid && c!==false){
        
         submitEvent(e);
          }
          else{
            if(aid===trid){
            alert("acceptor must be different ");
            }
          else if(props.location.amount-amount<0){
          alert("Not sufficient Balance");
           }
           else if(c===false){
            alert("first tick the check box");
           }
           else if(amount<=0){
            alert('Enter a valid amount more than 0');

           }
           else{
             alert('unable to made payment');
           }
          }

        }
    }
    const style=(e) => {
      setSelect([...select,e.target.id]);
      console.log(select);
      let element = document.getElementById(e.target.id);
      console.log("element",element);
      var i;
      for(i=0;i<select.length;i++){
        let n = document.getElementById(select[i]);

        ReactDOM.findDOMNode(n).style.color='white';

      }
      ReactDOM.findDOMNode(element).style.color='yellow';

    }
    
    
    
    const submitEvent=(e)=>{
        e.preventDefault();
       
        dispatch(updateCustomer(trid,name1,aid,name2,amount));
        setOn(!on);
        console.log("amount",amount);
        console.log("aid",aid);
        console.log("tid",trid);

      }
    
   
    useEffect(() => {
        dispatch(getCustomers());
        

        },[aid,amount,dispatch]);
      
  return(
    <div>
      <NavBar/>
      <div className="bodytransfer">
      {on?(
      

      <div className="transferbody">
          
          <div className="transferform">
          <Row>

         
            <Col sm="12" md="12" lg="5">
          <Form className="query">
            <h2 className="msg">Select the receiver first then proceed</h2>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Amount</Form.Label>
    <Form.Control type="number" placeholder="Enter valid Amount" 
    onChange={(e)=>{
      setAmount(e.target.value)}}
     required="True" />
     
    <Form.Text className="text-muted" >
      Be careful while transfering
    </Form.Text>
  </Form.Group>

 
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" onChange={()=>{alert('Are you sure to make this transaction?');setC(!c)}}/>
  </Form.Group>
  <Button variant="primary" type="button" className="pay" onClick={(e)=>{events(e)}}>
    Pay
  </Button>
</Form>


</Col>
<Col sm="12" md="12" lg="7">
          <h2 className="question">Whom You want to pay?</h2>
          {customers.map((customer)=>(
           <div  className="list" onClick={(e)=>{setAid(customer._id);setName1(props.location.name);setTrid(props.location.tid);setName2(customer.name);
           }}>
              <a name="buttonlist" id={customer._id}  className="btn btn-info m-2 button" type='button' onClick={(e)=>style(e)}> {customer.name}</a>  
           </div>
              ))
            }
            </Col>
</Row>

</div>

</div>

     ):<div className="paysuccess">
       {
          customers.filter((customer)=>customer._id===trid).map((customer)=>(
         <div className="payment">
           <h3 className="success"> Payment Successful !!!</h3>
         <h1 className="cname">{customer.name}</h1>
         <h2 className="cbal">Balance : {customer.balance}</h2>
         
            { customer.transfer.slice(0).reverse().map((object)=>(
                  <div className="hlist">
                   <Alert color="info">

<div className="instruct">
<span>You have</span> <span className="trans">{`${object.give?' Transferred ':' Accepted '}`}</span> <span className="amount"> <p>&#8377;{`${object.amount}`} </p></span> <span>{`${object.give?' to ':' from '}`}</span><span className="donor">{`${object.name}`}</span>
</div>
</Alert>

                  </div>
              ))}
             </div>
       ))}
       </div>}
       </div>
</div>
  
 
  );
}

export default Transfer;