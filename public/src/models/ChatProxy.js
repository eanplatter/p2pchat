var ChatProxy = function() {
  EventEmitter.call(this);
  this._peers = {};
};

ChatProxy.prototype = Object.create(EventEmitter.prototype);