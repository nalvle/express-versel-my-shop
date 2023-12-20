import express from 'express'

const router = new express.Router()

router.get('/', (_, res)=>{
    res.render('admin/orders', {name:'orders Orders'})
})

export default router;