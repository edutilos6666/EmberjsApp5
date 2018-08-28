var express = require('express'); 
var mongoose = require('mongoose'); 
var app = express(); 

var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 


app.use(function(req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); 
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
   res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS'); 
   next(); 
}); 

mongoose.connect('mongodb://localhost/emberData'); 

var noteSchema = new mongoose.Schema({
   title: 'string', 
   content: 'string', 
   author: 'string'
});  

var NoteModel = mongoose.model('note', noteSchema); 
app.get('/api', function(req, res) {
   res.send('Working'); 
}); 


var workerSchema = new mongoose.Schema({
   myid: 'number', 
   name: 'string', 
   age:'number', 
   wage: 'number', 
   active: 'boolean'
}); 



var WorkerModel = mongoose.model('worker', workerSchema); 


app.get('/api/notes', function(req, res) {
  NoteModel.find({}, function(err, docs) {
    console.log({note:docs}); 
    if(err) {
       res.send({error:err}); 
    } else { 
       res.send({note:docs}); 
    }
  }); 
}); 


app.get('/api/workers', function(req, res)  {
    WorkerModel.find({}, function(err, docs) {
       if(err)  {
          res.send({error:err}); 
      } else {
          res.send({worker:docs}); 
      } 
   }); 
}); 

app.get('/api/workers/:myid', function(req, res) {
    var myid = req.params.myid; 
    WorkerModel.find({myid:myid}, function(err, docs) {
        if(err)  {
          res.send({error:err}); 
      } else {
          res.send({worker:docs}); 
      } 
});  
}); 


app.post('/api/workers', function(req,res)  {
  //  console.log(req.body); 
    var myid = req.body.myid; 
    var name = req.body.name; 
    var age = req.body.age; 
    var wage = req.body.wage; 
    var active = req.body.active; 
    var worker = new WorkerModel({
    myid: myid , 
    name: name, 
    age: age, 
    wage: wage, 
    active: active 
    }); 

    //console.log(worker); 

     worker.save(function(err, w) {
       if(err) res.send({error:err}); 
       else res.send({worker:w}); 
    }); 
}); 

app.patch('/api/workers/:myid', function(req, res) {
      var myid = req.params.myid; 
      var name = req.body.name; 
      var age = req.body.age; 
      var wage = req.body.wage; 
      var active = req.body.active; 
      WorkerModel.updateOne({myid:myid}, {myid:myid, name:name, age:age, wage:wage, active:active}, function(err2, raw) {
        if(err2) res.send({error:err2}); 
        else res.send({worker:raw});    
   }); 
}); 

app.delete('/api/workers/:myid', function(req, res) {
    var myid = req.params.myid; 
    WorkerModel.deleteOne({myid:myid}, function(err, raw) {
       if(err) res.send({error:err}); 
       else res.send({worker:raw}); 
  }); 
}); 

app.delete('/api/workers/v0/delete', function(req, res) {
    WorkerModel.deleteMany({__v:0}, function(err, raw)  {
        if(err) res.send({error:err}); 
        else res.send(raw); 
  }); 
}); 

app.listen('4500'); 



