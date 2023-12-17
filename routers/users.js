import mongoose from "mongoose";
import express from 'express'

const urlencodedParser = express.urlencoded({extended: false});

const customerSchema = new mongoose.Schema({ 
    name: String, 
    age: Number,
     email: String 
});
const Customer = mongoose.model('Customer', customerSchema);

const router = new express.Router()
//create
router.post("/", urlencodedParser, async (request, response)=> {
    if(!request.body) return response.sendStatus(400);
        await Customer.create({
            name:request.body.name,
            age:request.body.age,
            email:request.body.email
        })
  response.render('admin/index', {name:request.body.name})
    //response.send(`${request.body.name} - ${request.body.age}`);
});


router.get('/', async (request, response)=>{
    response.render('admin/users',{users:await Customer.find()})
    //response.send(await Customer.find())
})
//get one
//router.get('/users/:id', PostController.getOne)
//update
//router.put('/users', PostController.update)
//delete
router.delete('/users/:id', urlencodedParser, async (request, response)=>{
    console.log(1);
    console.log(request);
})

export default router;