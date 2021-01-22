import express from 'express';
import {getcustomers,getcustomer, transfer} from '../controllers/customer.js';
const router = express.Router();

router.get('/',getcustomers);
router.get('/:id',getcustomer);

router.patch('/:id1&:name1&:id2&:name2&:money',transfer);
export default router; 