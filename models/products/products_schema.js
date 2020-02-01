'use strict';
const mongoose=require('mongoose');
require('../categories/categories_schema.js')
const products=mongoose.Schema({
           names:{type:String,required:true },
            price:{type:'number',required:true},
            weight:{type:'number',required:true},
            quantity_in_stock:{type:'number',required:true}    
},{toObject:{virtuals:true},toJSON:{virtuals:true}})
products.virtual('real categories',{
    ref:'categories',
    localField:'names',
    foreignField:'name',
    justOne:false
})
products.pre('findOne',function(){
    try{
        this.populate('real categories')
    } catch(e){
        console.error(e)
    }
})
module.exports=mongoose.model('products',products)