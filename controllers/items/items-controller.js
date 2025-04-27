import Item from '../../models/items/items-model.js'

async function seedItems(req, res) {
    try {
        //we need access to the model we created in /routes/items/items-router.js 'Items'
        //anytime you're interacting with the database, we need to do it asychronously by using async/await 
        //we put await here because we want to make sure that all fruits get deleted before we begin to execute anything else, WHY***?
       await Item.deleteMany({}) //we leave the object empty so it will query for everything instead of something specific. It deletes all of the documents inside of this specific database.
       await Item.create(
        {
           name: 'Cruiselinen Aria Dress',
           color: 'Natural Ecru',
           qty: '1'
        },
        {
           name: 'Element Linen Tube Top',
           color: 'Sundried Olive',
           qty: '1'
        },
        {
           name: 'Little Cropped Jacket',
           color: 'Smoky Sage',
           qty: '1'
        }
     );
     res.status(201).redirect('/items'); //created = 201. we redirect the user back to /items because /items is the index route where we can see all the items
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//export controller function

export {
    seedItems
}