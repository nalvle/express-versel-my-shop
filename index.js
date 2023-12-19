import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import * as path from 'path'
import methodOverride from 'method-override'
import nunjucks from "nunjucks"
import logger, {log, colors, symbols, tag, time, info, error, warn, done} from 'diy-log'

import main from './routers/main.js'
import mainAdmin from './routers/mainAdmin.js'
import userAdmin from './routers/usersAdmin.js'

const app = express();
const __dirname = path.resolve();

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
  
app.use('/',main)
app.use('/admin',mainAdmin)

app.use('/admin/users',userAdmin)




run().then(()=>{done(' db ready');}).catch(error => console.log(error.stack));


async function run() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.listen(process.env.PORT, ()=>{done(' http://localhost:'+process.env.PORT)});
