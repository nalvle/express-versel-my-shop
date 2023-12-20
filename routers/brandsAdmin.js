import express from 'express'

const router = new express.Router()

router.get('/', (_, res)=>{
    res.render('admin/brands', {name:'brand Admin'})
})

export default router;