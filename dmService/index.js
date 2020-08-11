var app = require('express')(); // Only used to send garbage test client
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {

    console.log(`User ${socket.id} connected`)

    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })

    socket.on('clientMessage', (msg) => {
        console.log(msg)
        io.emit('serverMessage', msg)
    })

})

app.get('/', (req, res) => {                // Garbage test client send
  res.sendFile(__dirname + '/index.html');
});

http.listen(40000, () => {
    console.log('Listening on *:40000')
})