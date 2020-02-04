
const express = require('express');
const categories = require('../models/categories/categories_model.js');
const products = require('../models/products/products_model.js');
const router = express.Router();
//Define our router
router.param('model',getModel);
router.get('/api/v1/:model/:id',getOneHandler);
router.get('/api/v1/:model',getHandler);
router.post('/api/v1/:model',postHandler);
router.put('/api/v1/:model/:id',updateHandler);
router.delete('/api/v1/:model/:id',deleteHandler);
function getOneHandler(req,res,next){
  let id = req.params.id;
  req.model.get(id)
    .then(record=>{
      res.status(200).json(record);
    }).catch(next);

}
function getHandler(req,res,next){
  req.model.get()
    .then(results=>{
      let count = results.length;
      res.status(200).json({count,results});
    })
    .catch(next);
}
function postHandler(req,res,next){
  req.model.create(req.body)
    .then(data=>{
      res.status(201).json(data);
    })
    .catch(next);
}
function updateHandler(req,res,next){
  let id = req.params.id;
  req.model.update(id)
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(next);
}
function deleteHandler(req,res,next){
  let id = req.params.id;
  req.model.delete(id)
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(next);
}
function getModel(req,res,next){
  let model = req.params.model;
  switch(model){
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('invalid model');
    return;
  }
}
module.exports = router;