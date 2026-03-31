const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Docker!");
});

const PORT = 3000;

// 🚨 THIS LINE IS CRITICAL
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
