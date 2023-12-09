const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employesSchema = new Schema({
  username:String,
  email:String,
  job:String,
  tel:Number,
 

});

const Article = mongoose.model("EmployesData",employesSchema);

module.exports = Article;
