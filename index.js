var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const questions = ['', ''];
const answers = [];

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

// listen to connections like line 9
// everytime someone connects, we put this person into an array with an id
// send questions one by one
// send answer one by one
// calculate the user points when an answer is received
// send user points to everyone

// leadership board (show the winners)


http.listen(3000, () => {
  console.log('listening on *:3000');
});