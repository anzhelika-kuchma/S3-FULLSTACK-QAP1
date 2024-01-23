/*In Node.js, the Buffer is a global object for working with binary data directly in memory. 
It's similar to an array of integers but stored separately from JavaScript's memory allocation. 
It's useful for handling binary data, like network protocols, file input/output, or raw data 
manipulation.
Below are some important aspects of the Buffer object:
• Buffers can be created in various ways, such as by specifying the length of the buffer or 
  by encoding strings.
• Buffers allow direct manipulation of binary data.
• Individual bytes can be accessed or modified using array-like syntax.
• The Buffer class provides various methods for performing operations on buffers, such as copying, 
  slicing, and comparing. */

// creating a buffer with a specified length
const buf1 = Buffer.alloc(6);
console.log(buf1)

// accessing and modifying buffer data
buf1[0] = 12;
console.log(buf1[0]); // 12
console.log(buf1);

// creating a buffer from a string with UTF-8 encoding
const buf2 = Buffer.from('Full Stack Javascript');
console.log(buf2);

// converting a buffer to a string
const str = buf2.toString();
console.log(str);
