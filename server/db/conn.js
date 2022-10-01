const  mongoose = require('mongoose');

//connect with mongodb Atlas

const db='mongodb+srv://RohitShelar45:Rohit45@cluster0.kkt89.mongodb.net/Kuvirabackend?retryWrites=true&w=majority';
mongoose.connect(db, {
     useNewUrlParser:true,
     useUnifiedTopology:true
}).then(()=>{
     console.log("connection successfull done");
 }).catch((error)=>{
console.log(error);
 })


// Connect with local mongodb database

// const  mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/kuvira", {
//      useNewUrlParser:true,
//      useUnifiedTopology:true
// }).then(()=>{
//      console.log("connection successfull done");
//  }).catch((error)=>{
// console.log(error);
//  })