require("dotenv").config()
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const homeRouter = require('./routes/index')



// connecting to database
mongoose.connect(process.env.database_Url).then(()=>{
    console.log('database is connected')
   }).catch((err)=> console.log('error connecting to database ',err))

//////setting up the server///////

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static(__dirname + '/public/'))
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}));
app.use(express.urlencoded({ extended: false }))


app.use(methodOverride('_method'))

app.use('/',homeRouter );


app.listen(process.env.PORT || 3007,()=> console.log('Server is Running at port 3007'))
