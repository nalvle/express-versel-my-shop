import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import * as path from 'path'
import userRouter from './routers/users.js'

const app = express();
const __dirname = path.resolve();

const admin_views = path.resolve(__dirname, 'views/admin');

config()

app.use(express.json());
app.use(express.static(__dirname + '/static/'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.sendFile(admin_views+'/index.html');
})

app.use('/users',userRouter)


run().then(()=>{console.log('db ready...');}).catch(error => console.log(error.stack));

async function run() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.listen(process.env.PORT, ()=>{console.log('server started...')});
