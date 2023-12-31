import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import * as path from 'path'
import nunjucks from "nunjucks"
import logger, {done} from 'diy-log'

import main from './routers/main.js'
import mainAdmin from './routers/mainAdmin.js'
import userAdmin from './routers/usersAdmin.js'
import productsAdmin from './routers/productsAdmin.js'
import categoriesAdmin from './routers/categoriesAdmin.js'
import brandsAdmin from './routers/brandsAdmin.js'
import ordersAdmin from './routers/ordersAdmin.js'
import settingsAdmin from './routers/settingsAdmin.js'

const app = express();config()
const __dirname = path.resolve();

app.use(express.json());
app.use(express.static(__dirname + '/static/'));
app.use('/admin/css',express.static(__dirname +'/views/admin/css'));
app.use('/admin/js',express.static(__dirname +'/views/admin/js'));
//public
app.use('/public/img',express.static(__dirname +'/static/img'));
app.set('view engine', 'html')

nunjucks.configure('views', {autoescape: true,express: app});

// Users routers 
app.use('/',main)
// Admin routers
app.use('/admin',mainAdmin)
app.use('/admin/users',userAdmin)
app.use('/admin/products',productsAdmin)
app.use('/admin/categories',categoriesAdmin)
app.use('/admin/brands',brandsAdmin)
app.use('/admin/orders',ordersAdmin)
app.use('/admin/settings',settingsAdmin)

run().then(()=>{done(' db ready');}).catch(error => console.log(error.stack));
async function run() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.listen(process.env.PORT, ()=>{done(' http://localhost:'+process.env.PORT)});
