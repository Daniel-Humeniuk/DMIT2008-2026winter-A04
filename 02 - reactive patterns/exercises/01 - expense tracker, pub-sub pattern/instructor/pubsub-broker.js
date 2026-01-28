// A very simple pub-sub messaging broker.
// We separate out the pub-sub system as its own logic layer in this file.

// Note how we don't need to hardcode for specific event types!
// We can just store keys for an event name, and its subscribers in an array.

const PubSub = {
  _subscribers: {},  // store who is subscribed, and to what event, e.g. :
  // {
  //    "gets-hungry": [mouthCallback, stomachCallback, brainCallback]
  // }

  subscribe(event, callback) {
    // register a subscriber to a given event.
    if (!this._subscribers[event]) {
      this._subscribers[event] = [];
    }
    this._subscribers[event].push(callback);
  },

  publish(event, ...data) {
    // broadcast the event & provided payload data to the event's subscribers.
    if (this._subscribers[event]) {
      this._subscribers[event].forEach(callback => callback(...data));
    }
  }
};