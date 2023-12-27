const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
    http module: Provides functionality for creating web servers.
    createServer: Creates a new server instance.
    req (request object): Contains information about the incoming request.
    res (response object): Used to send a response back to the client.
    statusCode: Sets the HTTP status code (200 indicates success).
    setHeader: Sets a response header (here, specifying content type as plain text).
    end: Sends the response body and ends the connection.
    listen: Starts the server and listens for incoming connections on the specified port and hostname
*/

/*5. Networking Concepts:
HTTP protocol: The foundation for web communication, defining how clients and servers interact.
IP addresses and ports: Used to identify devices on a network and specific services running on them.
Client-server model: A model where a client (browser) requests resources from a server (your Node.js application).
Request-response cycle: The process of a client sending a request and a server responding with the requested data.
*/