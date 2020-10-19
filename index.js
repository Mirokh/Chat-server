const express = require('express');
const cors = require('cors');
var app = express();


const port = 3000;
const cookieParser = require('cookie-parser');
require('module-alias/register');

var user_routes = require('./routes/users');
var chat_routes = require('./routes/chat');

app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', user_routes);
app.use('/chat', chat_routes);


var server = app.listen(3000);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on('SEND_MESSAGE', function (data) {
        io.emit('MESSAGE', data);
        console.log(data);
    });
});

app.get('/users/login', (req, res) => {
    res.send('Hello World!')
})