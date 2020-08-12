var app = require('express')(); // Only used to send garbage test client
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }

    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        const queue = 'test'

        channel.assertQueue(queue, {
            durable: false
        })

        io.on('connection', (socket) => {

            socket.join(queue)
            socket.emit('configureClient', queue)

            console.log(`User ${socket.id} connected`)
        
            socket.on('disconnect', () => {
                console.log(`User ${socket.id} disconnected`)
            })
        
            socket.on('clientMessage', (msg, target) => {
                console.log(`Message ${msg} sent to ${target}`)
                io.to(target).emit('serverMessage', msg)
                channel.sendToQueue(queue, Buffer.from(msg));
            })
        })
    });
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(40000, () => {
    console.log('Listening on *:40000')
})