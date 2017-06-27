const express = require ('express')
const app = express();
const mustache = require ('mustache-express')
const bodyParser = require('body-Parser')
const path = require('path');
const expressValiator = require('express-validator')

const data = require('./public/data')

app.engine('mustache',mustache())
app.set('view engine','mustache')
app.set('views',__dirname + '/views')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));

const incompleteList = data.incompleteList


app.get('/', function (req, res) {

  //res.render('index', {list: theList})
  res.render('index')
})

app.post('/add', function (req, res){

  let newTask = req.body.newTask;
  let newItem = {"task": newTask}
  incompleteList.push(newItem)

  res.render('index', {incomplete: incompleteList})

})



app.post('/complete', function (req, res) {

//add task to complete


//remove task from incomplete



//res.render('index', {list: theList})
})






app.listen(3000, function () {
  console.log('listening on port 3000!')
})
