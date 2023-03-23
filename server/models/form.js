const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    date:Date
});

const FormModel = mongoose.model("forms",formSchema);

module.exports = FormModel;