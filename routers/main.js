import express from 'express'

const router = new express.Router()

router.get('/', (_, res)=>{
    res.render('public/maintenance', {name:'Main Public'})
})

export default router;