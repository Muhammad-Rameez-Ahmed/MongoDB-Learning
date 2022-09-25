const mongoose = require("mongoose")

// Connection create between node.js and mongodb through monngose
// And Database Creation 
// Name "ram"
mongoose.connect("mongodb://127.0.0.1:27017/ram",{ useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("connected successfulyy")

}).catch((error)=>{
    console.log(error)
})


// Schema Create
const teacher= new mongoose.Schema({
    name:String,
    salary:Number,
    Grade:String,
    workout:Boolean

})


// collection create
const Teacher = new mongoose.model("Teacher",teacher)
