import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
  name:String,
  email:String,
  balance:{
    type:Number,
    default:0,
  },
  transfer:[{
    name:{
      type:String,
      default:'',
    },
    give:{
      type:Boolean,
      default:true,
    },
    amount:{
      type:Number,
      default:0,
    },
    createdAt:{
      type:Date,
      default:new Date(),
  },

  }],
  createdAt:{
      type:Date,
      default:new Date(),
  },
});

const customer=mongoose.model('customer',customerSchema);

export default customer;