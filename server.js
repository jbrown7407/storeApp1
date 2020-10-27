//npm init
//npm i express
//"main":"server,js" in package.json
//npm i ejs
//npm i mongoose
///DELETE npm i method-override

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const router= express.Router()
// app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.
//MIDDLEWARE
app.use(express.json());  // ows us to recognize the incoming request as a JSON object. 
app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.
app.use(express.static(__dirname + '/public'));  // ???
app.use(methodOverride('_method'))


const productsController =require('./controllers/products.js')
app.use('/products',productsController)
// app.use('/users',usersController)

app.get('/', (req, res) => {
  res.redirect('/products')
})



// mongoose connection logic
mongoose.connect('mongodb://localhost:27017/storeCRUD', { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
    
});



// importing the product model
// const Product = require('./models/products.js') RE-ADD????

// // /DELET FOR ROUTER?
// // ROUTES //
// ///////////
// // INDEX //
// ///////////
// app.get('/products', (req, res)=>{
//   Product.find({}, (error, allProducts)=>{
//     res.render('index.ejs', {
//       allProducts: allProducts,
//       // tabTitle: index //partial
//       })
//   })
// })

// app.get('/', (req, res)=>{   //INITIAL LOGIN
//     res.redirect('/products/login')
//     // tabTitle: login
// })


// app.get('/products/boards', (req, res)=>{
//   Product.find({}, (error, allProducts)=>{
//     res.render('/products/boards', {
//      products: allProducts,
//       // tabTitle: boards //partial
//   })
// })
// })
// ///////
// //NEW//
// ///////
// app.get('/products/new', (req, res) => {
//   res.render('new.ejs'), {
//   // tabTitle: new //partial
//   //res.send('new') send string of new to test
//   }
// })

// //////////
// //CREATE//
// ///post///
// router.post('/products/', (req, res)=>{    //Post is an express method to POST
//   // if(req.body.userType === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//   //   req.body.userType = true;
//   // } else { //if not checked, req.body.readyToEat is undefined
//   //   req.body.userType = false;
//   // }
//   Product.create(req.body, (error, createdProduct)=>{
//     console.log(req.body)
//     if (error){
//      console.log(error)
  
//    }
//     res.redirect('/products');
//     // tabTitle: products //partial
//   })
// })


// /////////////
// /// edit ////
// /////////////
// router.get('/products/:id/edit', (req, res)=>{
//   Product.findById(req.params.id, (err, foundProduct)=>{ //find the Product
//       res.render('edit.ejs', 
//         { product: foundProduct, //pass in found product 
//           // tabTitle: update //partial
//       })
//   })
// })

// ///////////
// // update//
// ///////////
// router.put('/products/:id', (req, res)=>{
//   // if(req.body.readyToEat === 'on'){
//   //     req.body.readyToEat = true;
//   // } else {
//   //     req.body.readyToEat = false;
//   // }
//   Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
//     res.redirect('/products');
//     // tabTitle: update //partial
//   })
// })

// //////////
// // show///
// //////////
// router.get('/products/:id', (req, res) =>{
//   Product.findById(req.params.id, (err, foundProduct)=>{
//     res.render('show.ejs', {
//       // console.log(foundProduct)
//       product: foundProduct,
//       // tabTitle: show //partial
//     })
//   })
// })

// ////////////
// // delete //
// router.delete('/products/:id', (req, res) => {
//   Product.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
//     res.redirect('/products') //redirect back to Product index
//     // tabTitle: products //partial
//     // res.send('deleting the fruit')
//   })
// })

// the app running the server
app.listen(3000, () => {
  console.log('listening')
})

