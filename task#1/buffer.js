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
