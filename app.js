const express = require('express');
const ejs = require('ejs');
const path =require("path");

var app = express();
app.use(express.static(path.join(__dirname,'public')));
app.set("views engine",'ejs');
app.set("views",path.join(__dirname,'views'));
const PORT=process.env.PORT || 8000;

const itemsList={
	itemA:["A-1","A-2","A-3","A-4","A-5","A-6","A-7","A-8","A-9","A-10","A-11","A-12","A-13","A-14","A-15","A-16","A-17","A-18","A-19"],
	itemB:["B-1","B-2","B-3","B-4","B-5","B-6","B-7","B-8","B-9","B-10","B-11","B-12","B-13","B-14","B-15"]
}



app.get('/',function(req,res){
	res.render('index.ejs',{list:itemsList});
	res.end();
})

app.listen(PORT,()=>{
	console.log(`Server is running at localhost:${PORT}\n`);
})