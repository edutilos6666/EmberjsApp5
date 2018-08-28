var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 

app.get('/', function(req, res) {
  res.send('Hello World'); 
}); 


app.post('/token', function(req, res) {
   if(req.body.username==='edu' && req.body.password=== 'tilos') {
      res.send({access_token: "secretcode"}); 
   } else {
      res.status(400).send({error: "invalid_grant"});
   }
}); 


app.use(bodyParser.urlencoded({extended:true})); 

app.get('/api/students', function(req, res){
  if(req.headers.authorization !== "Bearer secretcode") {
     return res.status(401).send('Unauthorized'); 
  }
   
  return res.status(200).send({
     students: [
      {id:1 , name: 'Erik', age: 24}, 
      {id:2 , name: 'Suze', age: 32}, 
      {id:3 , name: 'Jill', age:18}
     ]
  }); 
}); 


app.listen(4200, function() {
console.log('express is listening on port 3000');  
}); 
