// import express from 'express';
// import Fruit from '../models/fruit.mjs';


// //need this to do our routes
// const router = express.Router();



// // / is also /fruits
// router.get('/', async (req, res)=>{
//     try{
//         const fruits = await Fruit.find()
//         res.json(fruits)
//     }catch (err) {
//         console.log(err)
//     }
//     // res.send(fruits)
// })

// // New - to be handled by our front end 

// // Delete - Delete one fruit by Id
// router.delete('/:id', async (req, res)=>{
//     try {
//         await Fruit.findByIdAndDelete(req.params.id)
//         res.redirect('/fruits')//redirect back to fruits index
//     } catch(error) {
//         console.error(error);
//       }
//     })

// // Update - Update an existing fruit by id
// router.put("/fruits/:id", async (req, res) => {
//     try {
//       if (req.body.readyToEat === "on") {
//         //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true; //do some data correction
//       } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false; //do some data correction
//       }
//       // fruits.push(req.body);
//       await Fruit.findByIdAndUpdate(req.params.id, req.body);
  
//       res.redirect("/fruits");
//     } catch (error) {
//       console.log(error);
//     }
//   });

// // Create - POST Create a new fruit 
// router.post('/', async (req, res) => {
//     try {
//         if (req.body.readyToEat === "on") {
//           //if checked, req.body.readyToEat is set to 'on'
//           req.body.readyToEat = true //do some data correction
//         } else {
//           //if not checked, req.body.readyToEat is undefined
//           req.body.readyToEat = false //do some data correction
//         }
//          await Fruit.create(req.body)
    
//         res.redirect("/fruits")
    
//       } catch(error) {
//         console.log(error)
//       }
// })

// // Edit - to be handled by Frunt end


// //Show - GET one fruit by its ID
// router.get('/:id', async (req, res) =>{
//     try{
//         const fruit = await Fruit.findById(req.params.id)
//         res.json(fruit)
//     } catch(err) {
//         console.log(err)
//     }
// })


// export default router;