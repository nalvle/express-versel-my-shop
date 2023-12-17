import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import * as path from 'path'

const __dirname = path.resolve()
console.log(path.resolve(__dirname, 'views'));
console.log(__dirname);


const app = express()
const admin_views = path.resolve(__dirname, 'views/admin')

config()

app.use(express.json())
app.use(express.static('static'))

app.get('/', (req, res)=>{
    res.sendFile(admin_views+'/index.html')
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