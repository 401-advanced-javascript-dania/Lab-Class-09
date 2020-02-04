
const schema = require('./products_schema.js');
const Model = require('../model.js');
class Products extends Model{
  constructor(){
    super(schema);
  }
}
module.exports = new Products();
