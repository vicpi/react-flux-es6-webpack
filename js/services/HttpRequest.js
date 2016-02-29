'use strict';

import $ from 'jquery-browserify';

let HttpRequest = {
  get (url) {
    return this._ajax('GET', url);
  },

  post (url, data) {
    return this._ajax('POST', url, data);
  },

  head (url) {
    return this._ajax('HEAD', url);
  },

  put (url, data) {
    return this._ajax('PUT', url, data);
  },

  delete (url) {
    return this._ajax('DELETE', url);
  },

  trace (url) {
    return this._ajax('TRACE', url);
  },

  options (url) {
    return this._ajax('OPTIONS', url);
  },

  patch (url, data) {
    return this._ajax('PATCH', url, data);
  },

  _ajax (method, url, data) {
    var deferred = $.Deferred();
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    var formData = new FormData();
    if (data !== undefined)
    {
      for (var key in data) {
        var value = data[key];
        formData.append(key, value);
      }
    }
    xhr.onload = function () {
      if ((this.status < 200) || (this.status >= 300)) {
        deferred.reject(xhr.responseText);
      }
      deferred.resolve(xhr.responseText);
    };
    xhr.send(formData);

    return deferred.promise();
  }
};

export default HttpRequest;