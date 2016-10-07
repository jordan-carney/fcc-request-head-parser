var express = require('express')
var moment = require('moment')
var app = express()

app.get('/', function (req, res) {
  res.send('Welcome!!')
})

app.get('/:date', function (req, res) {
  var date = req.params.date
  var timeStamp = {
    unix: null,
    natural: null
  }

  // Check if natrual date format
  if( moment(date).isValid() ) {
    timeStamp.unix = moment(date).format('X')
    timeStamp.natural = moment(date).format('MMMM DD, YYYY')
  }

  // Check if unix timestamp (seconds)
  if( moment.unix(date).isValid() ) {
    timeStamp.unix = moment.unix(date).format('X')
    timeStamp.natural = moment.unix(date).format('MMMM DD, YYYY')
  }

  res.send(timeStamp);
})

app.listen(8080, function () {
})