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



app.get('/', function (req, res) {







  res.render('index')
})

app.post('/', function (req, res){


 let theList = data.list



res.render('index', {list: theList})

})







app.listen(3000, function () {
  console.log('listening on port 3000!')
})
