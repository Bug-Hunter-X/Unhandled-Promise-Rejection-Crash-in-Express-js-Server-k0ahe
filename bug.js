const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling missing! This will cause the server to crash 
    console.error(err);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error (e.g., database connection failure)
      if (Math.random() < 0.5) {
        reject(new Error('Database connection failed'));
      } else {
        resolve();
      }
    }, 1000);
  });
}