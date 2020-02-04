
const mongoose = require('mongoose');
require('../products/products_schema.js');
const categories = mongoose.Schema({
  name:{type:String,required:true },

},{toObject:{virtuals:true},toJSON:{virtuals:true}});
categories.virtual('real products',{
  ref:'products',
  localField:'name',
  foreignField:'names',
  justOne:false,
});
categories.pre('findOne',function(){
  try{
    this.populate('real products');
  }catch(e){
    console.error(e);

  }
});
module.exports = mongoose.model('categories',categories);