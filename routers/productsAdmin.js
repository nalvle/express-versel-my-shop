import express from 'express'

const router = new express.Router()

router.get('/', (_, res)=>{
    res.render('admin/products', {name:'products Admin'})
})

export default router;