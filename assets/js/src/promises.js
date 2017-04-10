"use strict";

// 0
var getWorkDone = function () {
  return new Promise(function (resolve, reject) {
    resolve('Well done.');
    reject('Not this time.');
  });
};
var read = function () {
  return Promise(function (resolve, reject) {
    resolve('Cause is resolving this in the "Neauromancer".');
    reject('Oww, I don\'t even remember what\'s what.');
  });
};
var goSleep = function () {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
        req.open('GET', 'http://google.pl');

    resolve(req);
    reject('Offline.');
  });
};

// 1
var fakeXhr = function () {
  return new Promise(function (resolve, reject) {
    var incoming = setTimeout(function () {
      resolve('Done.');
    }, 1000);

    return incoming;
  });
};
var transformRes = function (res) {
  return String(res).toUpperCase();
};

fakeXhr().then(function (res) {
  return transformRes(res);
}).then(function (res) {
  console.log(res);
}, function (err) {
  console.error(err);
});

var gotIt = function (res) {
  return transformRes(res);
};

fakeXhr()
  .then(gotIt)
  .then(function (gotIt) {
    console.log(gotIt);
  });

// 2
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
time()
  .then(moreTime);

// 4
var req = function (done) {
  var xhr = new XMLHttpRequest();
      xhr.open('GET', '/');
      xhr.onload = function () {
        done(null, xhr.response);
      };
      xhr.onerror = function () {
        done(xhr.response);
      };
      xhr.send();

  return xhr;
};
req(function (err, data) {
  if (err) throw err;
});
