import React, { useEffect, useState } from "react";
import Customers from './components/customers';
import Customer from './components/customer';
import Transfer from './components/transfer';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
    <Router>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/customers' component={Customers} />
        <Route path='/customer' component={Customer} />
        <Route path='/transfer' component={Transfer} />


       

      </Switch>
    </Router>
  </>
  );
}

export default App;
