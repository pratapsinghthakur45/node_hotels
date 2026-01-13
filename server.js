import express from 'express';
import db from './db.js';

//import person routes
import personRoutes from './routes/personRoutes.js';
import menuItemRoutes from './routes/menuItemRouters.js';


const app = express();
 
import bodyParser from 'body-parser';

app.use(bodyParser.json());

// app.use(express.json());
// 

app.get('/', (req, res) => {
  res.send('Hello World i am here')
})

//person data save and fatch
app.use('/person',personRoutes);


//menu data save and get
app.use('/menu',menuItemRoutes);
 
//listen on this port on our device
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});























// app.post('/person',(req,res)=>{
//   res.send('data is seved');
//   console.log("data is saved");
// })

// app.get('/chicken',(req,res) => {
//     const customizeList = {
//         name: "roasted chicken",
//         quantity: 2,
//         isNimbu: true,
//         isSalad: true,
//         isDrink: false
//     }
//     res.send(customizeList);
// });

// app.get('/idli',(req,res)=>{
//     res.send("i would love to serve idle sir")
// })


// const objectToConvert = {
//     "name": "jhon",
//     "age": 24, 
//     "city":"New York"
// };
// const json = JSON.stringify(objectToConvert);// convert object to json
// console.log(json);
// console.log(typeof json)



// const jsonString = '{"name": "jhon","age": 24, "city":"New York"}';
// const jsonObject = JSON.parse(jsonString); // convert json to object
// console.log(jsonObject.name);











// const notes = require("./notes.js");
// const _ = require('lodash');
// console.log("hiiii")

// var age = notes.age;
// var result = notes.addNumber(age+10,10);
// console.log(age);
// console.log("sum of two number is:"+ result);

// var data = ["person","person",1,2,1,2,3,3,44,44,44,"hiii","hitman","king kholi"];
// var filter = _.uniq(data);
// console.log(filter);






// console.log("hello i am here");

// function add(a,b){
//     return a+b;
// }

// var result = add(4,24);
// console.log(result);

// var os = require('os');
// var fs = require('fs');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi'+user.username+"!\n",()=>{
//     console.log("file is created");
// })