const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


const users = ['sohan', 'rohan', 'sohag', 'zahid', 'azad']
app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id]
    res.send({ id, name })
})
app.post('/adduser', (req, res) => {

    console.log(req.body);
    res.send({ "message": "successfully send" })
})
app.listen(3000, () => {
    console.log('port is started on server 3000');
})