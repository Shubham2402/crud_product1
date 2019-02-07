const express=require('express');
const bodyParser=require('body-parser');

//imports routes for the products
const product=require('D:/learning javascript/js-node/crud/product_app/route/product.route.js');
const app=express(); //initialize express 

//mongoose connection
const mongoose=require('mongoose');
let dev_db_url='mongodb://Shubham:shubham123@ds125225.mlab.com:25225/productstutorial11';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products',product);

let port=1234; //port number where express will listen
app.listen(port,()=>{
	console.log('Server is up and running on port number'+port);
})
