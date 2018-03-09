function loadURL(url) {
	var oRequest = new XMLHttpRequest();
	oRequest.open('GET', url, false);
	oRequest.setRequestHeader("User-Agent", navigator.userAgent);
	oRequest.send(null);
	
	return oRequest.responseText;
}
var EventBus = {
  topics: {},

  subscribe: function(topic, listener) {
    // create the topic if not yet created
    if(!this.topics[topic]) this.topics[topic] = [];

    // add the listener
    this.topics[topic].push(listener);
  },

  publish: function(topic, data) {
    // return if the topic doesn't exist, or there are no listeners
    if(!this.topics[topic] || this.topics[topic].length < 1) return;

    // send the event to all listeners
    this.topics[topic].forEach(function(listener) {
      listener(data || {});
    });
  }
};
var Mailer = function() {
  EventBus.subscribe('order/new', this.sendPurchaseEmail);
};

Mailer.prototype = {
  sendPurchaseEmail: function(userEmail) {
    console.log("Sent email to " + userEmail);
  }
};

var Order = function(params) {
  this.params = params;
};

Order.prototype = {
  saveOrder: function() {
    EventBus.publish('order/new', this.params.userEmail);
  }
};