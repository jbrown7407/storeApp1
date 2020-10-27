



const express = require('express');
const router = express.Router();

// const Product = require('../models/products.js') RE-ADD?
// ROUTES //
///////////
// INDEX //
///////////
router.get('/products', (req, res)=>{
    Product.find({}, (error, allProducts)=>{
      res.render('index.ejs', {
        allProducts: allProducts,
        // tabTitle: index //partial
        })
    })
  })
  
  router.get('/', (req, res)=>{   //INITIAL LOGIN
      res.redirect('/products/login')
      // tabTitle: login
  })
  
  router.get('/products/boards', (req, res)=>{
    Product.find({}, (error, allProducts)=>{
      res.render('/products/boards', {
       products: allProducts,
        // tabTitle: boards //partial
    })
  })
  })
  ///////
  //NEW//
  ///////
  router.get('/products/new', (req, res) => {
    res.render('new.ejs'), {
    // tabTitle: new //partial
    //res.send('new') send string of new to test
    }
  })
  
  //////////
  //CREATE//
  ///post///
  router.post('/products/', (req, res)=>{    //Post is an express method to POST
    // if(req.body.userType === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    //   req.body.userType = true;
    // } else { //if not checked, req.body.readyToEat is undefined
    //   req.body.userType = false;
    // }
    Product.create(req.body, (error, createdProduct)=>{
      console.log(req.body)
      if (error){
       console.log(error)
    
     }
      res.redirect('/products');
      // tabTitle: products //partial
    })
  })
  
  /////////////
  /// edit ////
  /////////////
  router.get('/products/:id/edit', (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{ //find the Product
        res.render('edit.ejs', 
          { product: foundProduct, //pass in found product 
            // tabTitle: update //partial
        })
    })
  })
  
  ///////////
  // update//
  ///////////
  router.put('/products/:id', (req, res)=>{
    // if(req.body.readyToEat === 'on'){
    //     req.body.readyToEat = true;
    // } else {
    //     req.body.readyToEat = false;
    // }
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
      res.redirect('/products');
      // tabTitle: update //partial
    })
  })
  
  //////////
  // show///
  //////////
  router.get('/products/:id', (req, res) =>{
    Product.findById(req.params.id, (err, foundProduct)=>{
      res.render('show.ejs', {
        // console.log(foundProduct)
        product: foundProduct,
        // tabTitle: show //partial
      })
    })
  })
  
  ////////////
  // delete //
  router.delete('/products/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
      res.redirect('/products') //redirect back to Product index
      // tabTitle: products //partial
      // res.send('deleting the fruit')
    })
  })

  module.exports = router;