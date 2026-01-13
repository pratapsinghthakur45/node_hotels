import express from 'express';
const router = express.Router();

import MenuItem from '../models/MenuItems.js';



//menu item take data
router.post('/',async (req,res)=>{
  try {
    const menuData = req.body;

  const newMenuItems = new MenuItem(menuData);


  //
  const resoponse = await newMenuItems.save();
  console.log("data saved of menu succesfully");
  res.status(200).json(resoponse);


  } catch (error) {
    console.log(error);
     res.status(500).json(error,'Internal server error');
  }
});

//fetch menu item data
router.get('/',async (req,res)=>{
  try {
     const data = await MenuItem.find();
         console.log("data fetched");
  res.status(200).json(data);

  } catch (error) {
     console.log(error);
      res.status(500).json(error,'Internal server error');
  }
});

//HW to make tasteType route
//fetch data of any field
router.get('/:tasteType',async (req,res)=>{
  try {
    const tasteType = req.params.tasteType;//extract the work type from the URL parameter
    if(tasteType=='spicy' || tasteType=='sweet' || tasteType=='sour'){
         const resopnse = await MenuItem.find({taste:tasteType});
         console.log("Fetched data");
         res.status(200).json(resopnse);
    }else{
      res.status(404).json({error:'Invalid taste type'});
    }
  } catch (error) {
       console.log(error);
      res.status(500).json(error,'Internal server error');
  }
});


export default router;