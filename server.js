var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./routes/api.js'),
  path = require('path')

mongoose.connect('mongodb://localhost/speaker-management', function(err){
  if(err) return console.log("Error connecting.")
  console.log("Connected to MongoDB (speaker-management)")
})

//middleware begin
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

//middleware end


//routes

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.use('/api', apiRoutes)

//server listening

app.listen(3000, function(){
  console.log("Server running on port 3000.")
})
