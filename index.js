const express = require('express');
const cors = require('cors');
var app = express();
var bodyParser = require('body-parser'); //connects bodyParsing middleware
const formidableMiddleware = require('express-formidable');


const port = 3000;
const cookieParser = require('cookie-parser');
require('module-alias/register');

var user_routes = require('./routes/users');
var chat_routes = require('./routes/chat');

app.use(cors());
app.use(formidableMiddleware());
app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use('/users', user_routes);
app.use('/chat', chat_routes);

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

var server = app.listen(3000);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on('SEND_MESSAGE', function (data) {
        io.emit('MESSAGE', data);
        console.log(data);
    });
});