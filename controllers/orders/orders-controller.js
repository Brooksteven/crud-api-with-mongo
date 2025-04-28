import Order from '../../models/orders/orders-model.js'

//this is my seed for seed route
async function seedOrders(req, res) {
    try {
        //we need access to the model we created in /routes/items/items-router.js 'Items'
        //anytime you're interacting with the database, we need to do it asychronously by using async/await 
        //we put await here because we want to make sure that all fruits get deleted before we begin to execute anything else, WHY***?
       await Order.deleteMany({}) //we leave the object empty so it will query for everything instead of something specific. It deletes all of the documents inside of this specific database.
       await Order.create(
        {
           email: 'jane.doe@example.com',
           productName: 'Cruiselinen Aria Dress',
           productId: '001',
           quantity: '1',
           price: '148'
        },
        {
            email: 'jane.doe@example.com',
            productName: 'Eleta Linen Maxi Dress',
            productId: '002',
            quantity: '1',
            price: '168'
         },
        {
            email: 'jane.doe@example.com',
            productName: 'Little Cropped Jacket',
            productId: '003',
            quantity: '1',
            price: '138.60'
         },
         {
            email: 'jane.doe@example.com',
            productName: '90s Slit Midi Dress',
            productId: '004',
            quantity: '1',
            price: '128'
         }
     );
     res.status(201).redirect('/orders'); //created = 201. we redirect the user back to /items because /items is the index route where we can see all the items
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// Now we are creating another function called items //
// function for INDEX (Step 2 - for creating a route which is now creating the controller)

async function getOrders(req, res){
    try {
        const orders = await Order.find({}); //here we are finding all the items
        res.status(200).json(orders); // here we share what we find with the clients.
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// function for CREATE 
async function createOrder(req, res){
    try {
        //if was using a boolean like readyToEat you would need to account for the checkbox by doing this = req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false; 
        const order = await Order.create(req.body);
        console.log(order);
        res.status(201).json(order); //send the item created back as a response
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// funciton for New
//this is what renders the new.ejs file
// async function renderNewForm(req, res){
//     try {
//         //here we are rendering the form from the new.ejs file
//         // in the views folder next go inside the items folder and then render the new.ejs file
//         res.render('./orders/new.ejs')
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// function for show
async function getOrder(req, res){
    try {
        const order = await Order.find({});
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



//export controller function (Step 3 - export the function and then test it. At this point it should already be imported into routes folder as: import * as itemsController from '../../controllers/items/items-controller.js' and the route as: router.get('/new', itemsController.renderNewForm) and this: export default router;)
// always test after exporting: 
export {
    seedOrders,
    getOrders,
    createOrder,
    getOrder
}