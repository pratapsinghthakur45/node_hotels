import express from 'express';
const router = express.Router();

import Person from "../models/person.js";





//post for to take person data
router.post('/', async (req,res)=>{
 try {
   const data = req.body;

  const newPerson = new Person(data);


  //
  const resoponse = await newPerson.save();
  console.log("data saved");
  res.status(200).json(resoponse);

 } catch (error) {
     console.log(error);
     res.status(500).json(error,'Internal server error');
 }
  
});

//fetch person data
router.get('/',async (req,res)=>{
  try{
         const data = await Person.find();
         console.log("data fetched");
  res.status(200).json(data);

  }catch(error){
      console.log(error);
      res.status(500).json(error,'Internal server error');
  }
});

//fetch data of any field
router.get('/:workType',async (req,res)=>{
  try {
    const workType = req.params.workType;//extract the work type from the URL parameter
    if(workType=='chef' || workType=='waiter' || workType=='manager'){
         const resopnse = await Person.find({work:workType});
         console.log("Fetched data");
         res.status(200).json(resopnse);
    }else{
      res.status(404).json({error:'Invalid work type'});
    }
  } catch (error) {
       console.log(error);
      res.status(500).json(error,'Internal server error');
  }
});

//update data of any person

router.put('/:id',async(req,res)=>{
  try {
    const personId = req.params.id;//extract the id from the URL parameter
    const updatedPersondData = req.body;//updated data for the person


    const response = await Person.findByIdAndUpdate(personId,updatedPersondData,{
      new:true,//updated data
      runValidators:true,//all validation are reqiure
    });

    if(!response){
        res.status(404).json({error:"Person not found"})
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:'Internal server error'});
  }
})

//delete any person data

router.delete('/:id',async(req,res)=>{
  try {
    const personId = req.params.id;//extract the id from the URL parameter
    


    const response = await Person.findByIdAndDelete(personId);

    if(!response){
        res.status(404).json({error:"Person not found"})
    }

    console.log("data deleted");
    res.status(200).json({message:"user delete succesfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({error:'Internal server error'});
  }
})

export default router;