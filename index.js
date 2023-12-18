import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import * as path from 'path'
import methodOverride from 'method-override'
import nunjucks from "nunjucks"
import logger, {log, colors, symbols, tag, time, info, error, warn, done} from 'diy-log'
import userRouter from './routers/users.js'

const app = express();
const __dirname = path.resolve();

const admin_views = path.resolve(__dirname, 'views/admin');

config()

app.use(express.json());
// override with POST having ?_method=DELETE
// override with different headers; last one takes precedence
app.use(methodOverride('X-HTTP-Method')) //          Microsoft
app.use(methodOverride('X-HTTP-Method-Override')) // Google/GData
app.use(methodOverride('X-Method-Override')) //      IBM
app.use(express.static(__dirname + '/static/'));
//app.set('view engine', 'ejs');
//app.set('view engine', 'pug');
app.set('view engine', 'html')

nunjucks.configure('views', {autoescape: true,express: app});
  
app.get('/', (_, res)=>{
    res.render('admin/index', {title:'Привет мир !'});
})

app.use('/users',userRouter)


run().then(()=>{info(' db ready');}).catch(error => console.log(error.stack));


async function run() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.listen(process.env.PORT, ()=>{done(' http://localhost:'+process.env.PORT)});
