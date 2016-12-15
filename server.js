const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use('/', function (req, res) {
  let ipType = 'IPv4'
  if ( req.ip.slice(0, 7) === "::ffff:" ) ipType = 'IPv6'

  const reqData = {
    ipaddress: req.ip + ' ' + ipType,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  }
  res.send(reqData)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
