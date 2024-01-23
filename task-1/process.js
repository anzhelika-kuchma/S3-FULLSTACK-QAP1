/*
The process module in Node.js provides information about, and control over, the current Node.js 
process. It is a global object, and you don't need to require it explicitly; you can use it 
directly in your Node.js scripts.*/

const process = require("process");

// Get the object containing the user environment information
console.log(process.env);

// Get the architecture of the CPU
console.log(process.arch);

// Get the platform on which Node.js is running
console.log(process.platform);

// Get the working directory of the current process
console.log(process.cwd());