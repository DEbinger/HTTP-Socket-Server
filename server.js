//jshint esversion: 6

const net = require('net');

const htmlContent = require('./htmlexports.js');
console.log(htmlContent);
let server = net.createServer((socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    socket.write('Server: This is the server, right?\n Date: Thu, 29 Dec 2016 07:01:28 GMT\n Accept: text/html, application/json');
    console.log(chunk);


/*    socket.on('data', function (chunk) {
      console.log(chunk);
    });
*/    socket.end();

  });
});



server.listen(8080, '0.0.0.0',  () => {
  console.log('opened server on ', server.address());
});