import  mongoose  from 'mongoose';
import customer from "../models/customer.js";

export const getcustomers=async(req,res)=>{
   try{
       const customers = await customer.find();
       res.status(200).json(customers);

       console.log('customers',customers);
   }
   catch(error){
    res.status(404).json({message:error.message});
}
}
export const getcustomer = async(req,res) =>{
    const {id:_id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post availabe');
    const customer=await customer.findById(_id);
    res.json(customer);
  }


export const transfer=async(req,res)=>{
    const donor=req.params.id1;
    const acceptor=req.params.id2;
    const amount=req.params.money;
    const name1=req.params.name1;
    const name2=req.params.name2;

    if(!mongoose.Types.ObjectId.isValid(donor)&& !mongoose.Types.ObjectId.isValid(acceptor)) return res.status(404).send('User not found');
    const giver =await customer.findById(donor);
    const taker=await customer.findById(acceptor);
    const updateacceptor=await customer.findByIdAndUpdate(acceptor,{balance:taker.balance+Number(amount),transfer:[...taker.transfer,{name:name1,give:false,amount:Number(amount)}]},{new:true});

    const updatedonor = await customer.findByIdAndUpdate(donor,{balance:giver.balance-amount,transfer:[...giver.transfer,{name:name2,give:true,amount:Number(amount)}]},{new:true});
     res.json(updatedonor);
}

