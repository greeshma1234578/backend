const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://greeshmaks:greeshmaks@cluster0.cmde1oq.mongodb.net/college?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(()=>{console.log(err)});

let sc=mongoose.Schema;
const studschema= new sc({
    Admno:String,
    Sname:String,
    Age:Number,
    Status:String
});
var studmodel=mongoose.model("Student",studschema)
module.exports=studmodel;