var unirest = require('unirest');


exports.to_Object=function (arr) {
    var obj = {};
    for (var i = 0; i < arr.length; ++i)
      obj[i] = arr[i];
    return obj;
}


exports.get_salesorder = (url,authid,signature, callback) => {
  var headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "api-auth-id": authid,
    "api-auth-signature": signature,
  }
  unirest.get(url)
  .headers(headers)
  .end(function (response) {
    callback(response);
  });
};

exports.create_salesorder = (url,authid,signature,body,callback) => {
  var headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "api-auth-id": authid,
    "api-auth-signature": signature,
  }
  unirest.post(url)
  .headers(headers)
  .send(body)
  .end(function (response) {
    callback(response);
  });
};
  
exports.get_inventory = (url,authid,signature, callback) => {
  var headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "api-auth-id": authid,
    "api-auth-signature": signature,
  }
  unirest.get(url)
  .headers(headers)
  .end(function (response) {
    callback(response);
  });
};