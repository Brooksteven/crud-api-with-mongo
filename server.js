//Step 1
import { config } from 'dotenv'; config(); //this is allowing the use of environment variables coming from a .env file
import './database/database.js'; //import the module into server.js
import express from 'express'; //this is importing the express package
import itemsRouter from './routes/items/items-router.js';
import ordersRouter from './routes/orders/orders-router.js';
import usersRouter from './routes/users/users-router.js';

const app = express(); //this initializing a new backend express app
const PORT = process.env.PORT || 3001; // This is conditional assignment. PORT conditionall is being assigned a value that comes from our PORT environment variable, if it doesn't find it, set it to 3001 instead

//by default I don't have to do app.set('views', 'views') and then specifiy the name of the folder, by default, it knows that the folder where your views are is called views. However if I change the 'views' folder so something else then I would need to do this and specifiy the folder name for example: app.set('views', 'NEW_FOLDER_NAME_HERE'); 
// app.set('views', 'views');


app.use(express.urlencoded({ extended: true })); //this allows us to have a req.body for whatever forms are submitted
app.use(express.json());//this allows us to have a req.body whenever json data is submitted directly without a form, coming from reqbin or postman etc
app.use('/items', itemsRouter); //this is saying for all routes that start with /items look for them in itemsRouter
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

//define a base route
app.get('/', (req, res) => {
    res.send('Welcome to the Aritzia API!');
});



//start our server. listening on port 3000 or 3001
app.listen(PORT, (req, res) => {
    console.log(`Server is listening on PORT: ${PORT}`);
});

//now test ABT (always be testing)
//npm run dev

//Once we see that it's running we can now incorporate the connection to the database next
















// import express from 'express'
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// dotenv.config()
// //fruits is for routes
// import fruits from './routes/fruits.mjs'
// //fruit is for models
// import Fruit from './models/fruit.mjs'


// const app = express()
// const port = process.env.PORT || 3000

// // Middleware 
// app.use(express.urlencoded())
// app.use(express.json())



// // Mongoose Connection
// mongoose.connect(process.env.ATLAS_URI)
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongoDB')
// })

// // // Mock data
// // const fruits = ["apple", "banana", "pear"]

// // Routes
// app.get('/',(req, res)=>{
//     res.send('Welcome to the Fruits API!')
// })

// // seed route
// app.get('/fruits/seed', async (req, res)=>{
//     try {
//         await Fruit.create([
//         {
//             name:'grapefruit',
//             color:'pink',
//             readyToEat:true
//         },
//         {
//             name:'grape',
//             color:'purple',
//             readyToEat:false
//         },
//         {
//             name:'avocado',
//             color:'green',
//             readyToEat:true
//         }
//     ])
//         res.redirect('/fruits')
//     } catch (error) {
//         console.error(error)
//       }
// })

// //From our Fruit Routes
// app.use("/fruits", fruits)


// // App.listen
// app.listen(port, () =>{
// console.log(`Server is running on port ${port}`)
// })

