const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const PORT = 3000;

const app = express();
const server = http.createServer((app));
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.emit('newMessage', {
        from: 'Nicholas',
        text: 'Hello World!',
        createdAt: 123
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
    })

    socket.on('disconnect', () => {
        console.log('User has Disconnected')
    })
})

server.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
})