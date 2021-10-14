const express = require('express')
const app = express();
app.get('/', (req, res) => {
    res.send("I am trying this 3rd time Yaaaaaa now next vedio")
})
app.listen(7790, () => {
    console.log('port is started on port 7790');
})