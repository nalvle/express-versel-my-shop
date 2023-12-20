import express from 'express'

const router = new express.Router()

router.get('/', (_, res)=>{
    res.render('admin/categories', {name:'categories Admin'})
})

export default router;