import express from 'express'

const router = new express.Router()

router.get('/', (_, res)=>{
    res.render('admin/main', {name:'Main Admin'})
})

export default router;