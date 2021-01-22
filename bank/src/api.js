import axios from 'axios';
const url = 'https://sparkbankingsystem.herokuapp.com/customers';
export const fetchCustomers = () => axios.get(url);
export const fetchCustomer = (id) => axios.get(`${url}/${id}`);

export const updateCustomer=(id1,name1,id2,name2,money)=>axios.patch(`${url}/${id1}&${name1}&${id2}&${name2}&${money}`);
