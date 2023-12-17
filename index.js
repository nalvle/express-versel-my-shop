import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv';

const app = express()

config()

app.use(express.json())
app.use(express.static('static'))


async function startApp() {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=>console.log('DB Ready'))
        app.listen(process.env.PORT, () => console.log('SERVER STARTED ON PORT ' + process.env.PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()