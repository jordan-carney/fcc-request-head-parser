const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use('/', function (req, res) {
  const reqData = {
    ipaddress: req.ip,
    software: req.headers['user-agent'],
    language: req.headers['accept-language'],
  }
  res.send(reqData)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
