// common js imports and exports - DEFAULT in Node.js
// module.exports = {encrypt ....}
const { encrypt, decrypt, emojify } = require('crypto-ridsuteri');
const greet = require('../npm-package/index')
// module js imports 
// in order to make it work in node.js env - you have label your project type as module
// inside your package.json
// export defaults {encrypt, decrypt ..}
// import { encrypt, decrypt, emojify } from 'crypto-ridsuteri'

// encrypt message
const encrypted = encrypt("Hello World");
console.log(encrypted); // Output: "dlrow olleh"

// decrypt message
const decrypted = decrypt("dlrow olleh");
console.log(decrypted); // Output: "hello world"

// emojify a message
const emojified = emojify("Coding is fun");
console.log(emojified); 
greet('riddhi')

// secret here
// you will not directly write it
// process.env.THAT_SECRET