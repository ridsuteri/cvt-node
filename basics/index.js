const fs = require('fs');

console.log('pre readFile')

// fs.readFile('./sample.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

try {
    const data = fs.readFileSync('./sample.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }

console.log('post readFile')
