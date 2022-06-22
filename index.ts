const express = require('express')
const Gun = require('gun');
const app = express()
const port = 3002
const hostname = '0.0.0.0'
app.use(Gun.serve);

const server = app.listen(port, hostname => {
    console.log(`P2P Messaging app listening on http://${hostname}:${port}. Try ifconfig -a to get ip address`)
})

Gun({ web: server })
