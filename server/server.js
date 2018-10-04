const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const { generateMessage, generateLocationMessage } = require("./utils/message");

const publicPath = path.join(__dirname, "../public");
const PORT = 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New User Connected");

  socket.emit(
    "newMessage",
    generateMessage("Admin", "Welcome to the chat room!")
  );

  socket.broadcast.emit(
    "newMessage",
    generateMessage("Admin", "A new user has joined the chat!")
  );

  socket.on("createMessage", (message, callback) => {
    console.log("createMessage", message);
    io.emit("newMessage", generateMessage(message.from, message.text));
    callback();
  });

  socket.on("createLocationMessage", coords => {
    io.emit(
      "newLocationMessage",
      generateLocationMessage("Admin", coords.latitude, coords.longitude)
    );
  });

  socket.on("disconnect", () => {
    console.log("User has Disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
