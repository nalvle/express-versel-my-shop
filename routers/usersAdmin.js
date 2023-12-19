import express from 'express'
import Customer from '../models/users.js';

const urlencodedParser = express.urlencoded({extended: false});

const router = new express.Router()
//create
router.post("/", urlencodedParser, async (req, res, next)=> {
    if(!req.body) return res.sendStatus(400);
        await Customer.create({
            name:req.body.name,
            age:req.body.age,
            email:req.body.email
        })
  //return res.render('admin/users', {name:req.body.name})
  return res.redirect('/admin/users')
    //res.send(`${req.body.name} - ${req.body.age}`);
});


router.get('/', async (req, res)=>{
    res.render('admin/users',{users:await Customer.find()})
    //res.send(await Customer.find())
})
//get one
//router.get('/users/:id', PostController.getOne)
//update
//router.put('/users', PostController.update)
//delete
router.delete('/:id', urlencodedParser, async (req, res)=>{
    const user = await Customer.findByIdAndDelete(req.params.id)
    //console.log(req.params.id);
    //res.json(req.params.id)
    return res.json({user:user, id:req.params.id})
})

export default router;