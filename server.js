//STEP 1 
import { config } from 'dotenv'; config(); //this is allowing the use of environment variables coming from a .env file
import express from 'express'; //this is importing the express package

const app = express(); //this initializing a new backend express app
const PORT = process.env.PORT || 3001; // This is conditional assignment. PORT conditionall is being assigned a value that comes from our PORT environment variable, if it doesn't find it, set it to 3001 instead


app.use(express.urlencoded({ extended: true })); //this allows us to have a req.body for whatever forms are submitted
app.use(express.json());//this allows us to have a req.body whenever json data is submitted directly without a form, coming from reqbin or postman etc


//define a base route
app.get('/', (req, res) => {
    res.send('Welcome to the Aritzia API!');
});



//start our server. listening on port 3000 or 3001
app.listen(PORT, (req, res) => {
    console.log(`Server is listening on PORT: ${PORT}`);
});

//now test ABT (always be testing)
















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

