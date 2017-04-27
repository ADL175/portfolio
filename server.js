'use strict';
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.listen(PORT, function() {
  console.log(`Great! You're on port ${PORT}`);
});

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
// app.get('/repos', (request, response) => response.sendFile('repos', {root: './public'}));
// app.get('/projects', (request, response) => response.sendFile('projects', {root: './public'}));
// app.get('/*', (request, response) => response.sendFile('index.html', {root: './public'}));
