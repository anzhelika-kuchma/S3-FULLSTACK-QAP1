/*The http module in Node.js is a core module that helps you create HTTP servers and make 
HTTP requests. It is included in the standard library and is commonly used in building 
web applications and managing HTTP communication.

The server created using createServer takes a callback function that is invoked for each 
incoming HTTP request.
The callback function receives the request and response objects, allowing you to handle 
the incoming request and send a response. */

// importing the http module
const http = require('http');

// creating an http server
const server = http.createServer((req, res) => {

    // confirming that the request was made successfully
    console.log('request made');

    //setting header content type
    res.setHeader('Content-Type', 'text/plain');

    // setting webpage comtent
    res.write('Full Stack Javascript');
    
    res.end()
})

// making the server listen on port 3000 and the 'localhost' address
server.listen(3000, 'localhost', () => {
    console.log('server listening for request on port 3000');
})