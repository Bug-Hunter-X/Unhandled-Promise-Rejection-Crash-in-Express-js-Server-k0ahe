const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('Database connection failed'));
      } else {
        resolve();
      }
    }, 1000);
  });
}