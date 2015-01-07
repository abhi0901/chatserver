var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    
  socket.on('chat message', function(msg){
      var address = socket.handshake.address;
    io.emit('chat message', msg+"~"+address);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
