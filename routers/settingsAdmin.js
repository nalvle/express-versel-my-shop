import express from 'express'

const router = new express.Router()

router.get('/', (_, res)=>{
    res.render('admin/settings', {name:'Настройки'})
})

export default router;