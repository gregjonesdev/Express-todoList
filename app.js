const express = require ('express')
const app = express();
const mustache = require ('mustache-express')
const bodyParser = require('body-Parser')
const path = require('path');
const expressValiator = require('express-validator')

const incom = require('./public/incomplete')
const com = require('./public/complete')


app.engine('mustache',mustache())
app.set('view engine','mustache')
app.set('views',__dirname + '/views')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));

const incompleteList = incom.list
const completeList = com.list

app.get('/', function (req, res) {

  //res.render('index', {list: theList})
  res.render('index')
})

app.post('/add', function (req, res){

  let newTask = req.body.newTask;

  console.log("req.body.newTask: " + req.body.newTask)

  let newItem = {"task": newTask}
  incompleteList.push(newItem)
  res.render('index', {incomplete: incompleteList})

})



app.post('/complete', function (req, res) {

//add task to complete

 let completedTask = req.body.compTask

 //console.log(completedTask)

for (i=0; i<incompleteList.length; i++) {
  if (incompleteList[i]["task"]===completedTask) {
  console.log(incompleteList[i]["task"])
  completeList.push(incompleteList[i])
  incompleteList.splice(i, 1)

}
 }


res.render('index', {complete: completeList, incomplete: incompleteList})

})






app.listen(3000, function () {
  console.log('listening on port 3000!')
})
