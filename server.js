//jshint esversion: 6

const net = require('net');

const htmlContent = require('./htmlexports.js');

let server = net.createServer((socket) => {

  socket.on('data', (chunk) => {
    socket.write('Server: This is the server, right?\n Date: Thu, 29 Dec 2016 07:01:28 GMT\n Accept: text/html, application/json');
    socket.end();

    /*messageCount++;
    console.log(`Client: ${chunk}`);
    process.stdin.pipe(server);*/

  });
});



server.listen(8080, '0.0.0.0',  () => {
  console.log('opened server on ', server.address());
});