//jshint esversion: 6

const net = require('net');

const htmlContent = require('./htmlexports.js');
// console.log(htmlContent);
let server = net.createServer((socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    //let timeStamp = '';
    	let request = chunk.split(' ');
    	// console.log(request);
    	let requestor = request[1];
    	// console.log(requestor);

    	switch(requestor){
    		case "/404.html":
    		socket.write(`'Server: This is the server, right?\n Date: Thu, 29 Dec 2016 07:01:28 GMT\n Accept: text/html, application/json'
          ${htmlContent._404_html}`);
    		break;

    		case "/index.html":
    		socket.write(htmlContent.index_html);
    		break;

    		case "/css/styles.css":
    		socket.write(htmlContent.styles_css);
    		break;

    		case "/helium.html":
    		socket.write(htmlContent.helium_html);
    		break;

    		case "/hydrogen.html":
    		socket.write(htmlContent.hydrogen_html);
    		break;
    	}

    socket.end();

  });
});



server.listen(8080, '0.0.0.0',  () => {
  console.log('opened server on ', server.address());
});