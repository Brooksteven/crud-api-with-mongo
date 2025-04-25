import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
//fruits is for routes
import fruits from './routes/fruits.mjs'
//fruit is for models
import Fruit from './models/fruit.mjs'


const app = express()
const port = process.env.PORT || 3000

// Middleware 
app.use(express.urlencoded())
app.use(express.json())



// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once('open', ()=> {
    console.log('connected to mongoDB')
})

// // Mock data
// const fruits = ["apple", "banana", "pear"]

// Routes
app.get('/',(req, res)=>{
    res.send('Welcome to the Fruits API!')
})

// seed route
app.get('/fruits/seed', async (req, res)=>{
    try {
        await Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ])
        res.redirect('/fruits')
    } catch (error) {
        console.error(error)
      }
})

//From our Fruit Routes
app.use("/fruits", fruits)


// App.listen
app.listen(port, () =>{
console.log(`Server is running on port ${port}`)
})

