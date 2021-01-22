import React,{useState} from 'react';
import NavBar from './navbar';
import './home.css';


/**
* @author
* @function Home
**/

const Home = (props) => {

  return(
    <div className="homecontainer">
     <NavBar/>
     <div>
       <h1 className="tt">
         Welcome to Sparks Banking System

       </h1>
       <h3 className="st">
         Now Money transferring has become very easy 
       </h3>
       <h3 className="ft">
        Note: Be careful while transferring. Payment once made can't be reversed
       </h3>
     </div>
    </div>
   )

 }

export default Home;