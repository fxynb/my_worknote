const express = require('express')
const path = require('path')

const app = express()
port = 3000

//静态资源访问服务功能,这句很重要，
app.use(express.static(path.join(__dirname, 'public')));

app.get('/first', (req, res) => res.send('hello,world'))

app.listen(port, () => {})