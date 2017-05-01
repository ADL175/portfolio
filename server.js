'use strict';
const pg = require('pg');
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
const githubToken = process.env.GITHUB_TOKEN;
console.log(githubToken);
app.use(express.static('./public'));
app.listen(PORT, function() {
  console.log(`Great! You're on port ${PORT}`);
});

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/repos', (request, response) => {
  $.get(`https://api.github.com/users/adl175/repos?access_token=${githubToken}`)
  .then(
    results => {
      response.send(results);
      console.log(results);
    });
})
