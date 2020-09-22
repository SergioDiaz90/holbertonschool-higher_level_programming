#!/usr/bin/node
const request = require('request');
const fs = require('fs');
// const URL = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

function createFile (url, path) {
  request(url, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    var stream = fs.createWriteStream(path);
    stream.once('open', (fd) => {
      stream.write(body);
      stream.end();
    });
  });
}

createFile(process.argv[2], process.argv[3]);
