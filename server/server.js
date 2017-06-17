var express=require("express");

var app=express();

console.log("path", __dirname);

app.use(express.static(__dirname + './../client'));

//console.log(__dirname + './../client');

app.get('/',function(req,res){
	res.render('index.html');
});

app.get('/loginview',function(req,res){

console.log(">>>>>>>>" , req.query);
	if(req.query.name=='shivi' && req.query.password=='1234'){
		res.json({
			name:'shivi',
			phone:8802323072,
			age:22,
			des:'student'
		})
	}
	else{
		res.send("Incorrect details")
	}
})

app.listen(7000,function(){
	console.log("server is running")
});;