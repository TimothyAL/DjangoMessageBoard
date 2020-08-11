var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('A user connected')
    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })
})

http.listen(40000, () => {
    console.log('Listening on *:40000')
})