import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import * as path from 'path'

import user from './models/user.js'

const __dirname = path.resolve()
console.log(path.resolve(__dirname, 'views'));
console.log(__dirname);


const app = express()
const admin_views = path.resolve(__dirname, 'views/admin')

config()

app.use(express.json())
app.use(express.static(__dirname + '/static/'));

app.get('/', (req, res)=>{
    res.sendFile(admin_views+'/index.html')
})
app.get('/user',  (req, res, next) =>{
    user.create({ 
        name: "also_awesome",
        email:"email",
        password:"password"}).then(()=>console.log('saved'))
})


async function startApp() {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=>console.log('DB Ready'))
        app.listen(process.env.PORT, () => console.log('SERVER STARTED ON PORT ' + process.env.PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()