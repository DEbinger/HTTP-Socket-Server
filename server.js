//jshint esversion: 6

const net = require('net');

let messageCount = 0;
let  header = {
  Server: 'test server',
  Date: 'test date',
  ContentType: 'test contenttype',
  ContentLength: 'test ContentLength',
  Connection: 'test Connection'
};
console.log(header);

let server = net.createServer((server) => {

  server.on('data', (chunk) => {
    messageCount++;
    console.log(`Client: ${chunk}`);
    process.stdin.pipe(server);

  });
});

server.listen(8080, '0.0.0.0',  () => {
  console.log('opened server on ', server.address());
});