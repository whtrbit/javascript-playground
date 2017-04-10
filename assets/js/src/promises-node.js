"use strict";

var fs = require('fs');

var fakeXhr = function () {
  return new Promise(function (resolve, reject) {
    var incoming = setTimeout(function () {
      resolve('Done.');
    }, 2000);

    return incoming;
  });
};
var file =
  new Promise(function (resolve, reject) {
    fs.readFile('texciasz.txt', function (err, text) {
      if (err)
        reject(err);
      else
        resolve(text.toString());
    });
  })
  .then(function (res) {
    console.log('Resolve:\n' + res);
  })
  .catch(function (err) {
    console.log('Error:\n' + err);
  });

var fileForChain = function () {
  return new Promise(function (resolve, reject) {
    fs.readFile('text.txt', function (err, text) {
      if (err) // reject
        setTimeout(function() {
          console.log('Trobles:\n' + err);
          reject(err);
          }, 0);
      else // resolve
        setTimeout(function() {
          console.log('Yo yo:\n' + text);
          resolve(text);
          }, 0);
    });
  });
};
var time = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var msg = 'Another promise.';
      console.log(msg);
      resolve(msg);
    }, 2000);
  });
};
var moreTime = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var msg = 'And another one...';
      console.log(msg);
      resolve(msg);
    }, 2000);
  });
};
fileForChain()
  .then(time)
  .then(moreTime);
