const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 8003;
server.listen(PORT, () => {
  console.log(`=> http://localhost:${PORT}`);
});