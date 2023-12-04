const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://greeshmaks:greeshmaks@cluster0.cmde1oq.mongodb.net/college?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(()=>{console.log(err)});

let sc=mongoose.Schema;
const certschema= new sc({
    sid:{type:mongoose.Schema.Types.ObjectId,ref:'students'},
    qualification:String,
    certphoto:{
    data: Buffer,
    contentType:String
    }
});
var certmodel=mongoose.model("certificate",certschema)
module.exports=certmodel;