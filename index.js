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
    Name:String,
    Age:Number,
    Grade:String,
    workout:Boolean

})

// collection create
const Teacher = new mongoose.model("Teacher",teacher)




// Documents create
const createDocument= async ()=>{
    try{
        const maleteacher= new Teacher({
            Name:"AHMED",
            Age:22,
            Grade:"A",
            workout:true
        })
        const femaleteacher= new Teacher({
            Name:"Amna",
            Age:23,
            Grade:"B",
            workout:false
        })
        const oldteacher= new Teacher({
            Name:"Aslam",
            Age:88,
            Grade:"A+",
            workout:true
        })
        const youngteacher= new Teacher({
            Name:"Yamen",
            Age:99,
            Grade:"C",
            workout:false
        })
        const result =await Teacher.insertMany([maleteacher,femaleteacher,oldteacher,youngteacher]);
        console.log(result);

    }catch(error){
        console.log(error)
    }

}




// Document Read
const getDocument =async ()=>{
    try{
        const getresult = await Teacher
        .find({Name:"Yamen"})
        // .select({salary:1})
        // .limit(1);
        console.log(getresult)
    }catch(error){
        console.log(error)
    }


    }
  



// Document Update
const updateDocument = async ()=>{
    try{
        const resultupdate =await Teacher.findByIdAndUpdate({_id:"6330c106a03cf44da8077c20"},{$set:{Name:"Iftikhar"}})
        console.log(resultupdate)
    }catch(error){
        console.log(error)

    }

}





// Document delete
const deleteDocument = async ()=>{
    try{
        const result= await Teacher.deleteOne({Age:22})
   
        console.log(result)
    
    }catch(error){
        console.log(error)
    }

}



// createDocument();
// getDocument()
// updateDocument();
// deleteDocument()