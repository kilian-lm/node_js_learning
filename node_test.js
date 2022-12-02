// Require the http module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP headers
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Write the response
  res.write('<h1>Hello World!</h1>');
  // End the response
  res.end();
});

// Start the server on port 8000
server.listen(8000);
console.log('Server listening on port 8000');