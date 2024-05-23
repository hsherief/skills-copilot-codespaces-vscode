// Create web server
// 1. Require the http module
// 2. Create a server
// 3. Listen on port 3000
// 4. Respond with "Hello, World!" for requests to the root URL
// 5. Respond with 404 for all other requests
// 6. Respond with 200 for requests to /comments
// 7. Respond with the comments JSON object
// 8. Respond with 201 for POST requests to /comments
// 9. Add the new comment to the comments object
// 10. Respond with the new comment

var http = require('http');
var url = require('url');
var comments = [
  { name: 'John', comment: 'Hello, World!' },
  { name: 'Mary', comment: 'Hi, there!' }
];

var server = http.createServer(function (req, res) {
  var urlParts = url.parse(req.url);
  if (req.method === 'GET' && urlParts.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
  } else if (req.method === 'GET' && urlParts.pathname === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else if (req.method === 'POST' && urlParts.pathname === '/comments') {
    var newComment = { name: 'Joe', comment: 'Good job!' };
    comments.push(newComment);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newComment));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');