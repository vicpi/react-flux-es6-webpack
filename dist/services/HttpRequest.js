'use strict';

var $ = require('jquery-browserify');

var HttpRequest = {
  get: function get(url) {
    return this._ajax('GET', url);
  },
  post: function post(url, data) {
    return this._ajax('POST', url, data);
  },
  head: function head(url) {
    return this._ajax('HEAD', url);
  },
  put: function put(url, data) {
    return this._ajax('PUT', url, data);
  },
  delete: function _delete(url) {
    return this._ajax('DELETE', url);
  },
  trace: function trace(url) {
    return this._ajax('TRACE', url);
  },
  options: function options(url) {
    return this._ajax('OPTIONS', url);
  },
  patch: function patch(url, data) {
    return this._ajax('PATCH', url, data);
  },
  _ajax: function _ajax(method, url, data) {
    var deferred = $.Deferred();
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    var formData = new FormData();
    if (data !== undefined) {
      for (var key in data) {
        var value = data[key];
        formData.append(key, value);
      }
    }
    xhr.onload = function () {
      if (this.status < 200 || this.status >= 300) {
        deferred.reject(xhr.responseText);
      }
      deferred.resolve(xhr.responseText);
    };
    xhr.send(formData);

    return deferred.promise();
  }
};

module.exports = HttpRequest;