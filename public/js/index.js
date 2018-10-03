var socket = io();

socket.on('connect', function () {
    console.log('Connected to Server');

    socket.emit('createMessage', {
        from: 'Nicholas',
        text: 'Hello Server!'
    })

});

socket.on('disconnect', function () {
    console.log('Disconnected from Server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message)
})

