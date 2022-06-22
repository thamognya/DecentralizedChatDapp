// this is the backend
const express = require('express')
const Gun = require('gun')
const app = express()
const port = 3001
app.use(Gun.serve);

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

Gun({ web: server });