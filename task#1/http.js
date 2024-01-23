// importing the http module
const http = require('http');

// creating an http server
const server = http.createServer((req, res) => {

    // confirming that the request was made successfully
    console.log('request made');
})

// making the server listen on port 3000 and the 'localhost' address
server.listen(3000, 'localhost', () => {
    console.log('server listening for request on port 3000');
})