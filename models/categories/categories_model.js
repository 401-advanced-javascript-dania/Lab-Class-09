'use strict';
const schema=require('./categories_schema.js');
const Model=require('../model.js');
class Categories extends Model{
    constructor(){
        super(schema)
    }
}
module.exports=new Categories;