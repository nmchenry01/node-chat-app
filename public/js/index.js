var socket = io();

socket.on("connect", function() {
  console.log("Connected to Server");
});

socket.on("disconnect", function() {
  console.log("Disconnected from Server");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
  var li = $("<li></li>");
  li.text(`${message.from}: ${message.text}`);

  $("#messages").append(li);
});

socket.on("newLocationMessage", function(message) {
  console.log("newLocationMessage", message);
  var li = $("<li></li>");
  var a = $('<a target="_blank">My Current Location</a>');

  li.text(`${message.from}: `);
  a.attr("href", message.url);
  li.append(a);
  $("#messages").append(li);
});

$("#message-form").on("submit", function(e) {
  e.preventDefault();

  var messageTextbox = $("[name=message]");

  socket.emit(
    "createMessage",
    {
      from: "User",
      text: messageTextbox.val()
    },
    function(data) {
      messageTextbox.val("");
    }
  );
});

var locationButton = $("#send-location");

locationButton.on("click", function() {
  if (!navigator.geolocation) {
    return alert("Your browser does not support Geolocation.");
  }

  locationButton.attr("disabled", true).text('Sending location...');
  navigator.geolocation.getCurrentPosition(
    function(position) {
      locationButton.attr("disabled", false).text('Send location');
      socket.emit("createLocationMessage", {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    },
    function() {
      locationButton.attr("disabled", false).text('Send location');
      alert("Unable to fetch location");
    }
  );
});
