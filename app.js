const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('App is running 🚀');
});

const PORT = 3000;

// 🔥 CRITICAL for Docker
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
