/* eslint-disable no-restricted-globals */
self.importScripts('https://cdn.jsdelivr.net/npm/comlinkjs@3/umd/comlink.js');

const obj = {
  counter: 0,
  incrementBy(increment = 0, cb) {
    this.counter += increment;
    if (typeof cb === 'function') {
      cb(this.counter);
    }
  },
};

self.Comlink.expose(obj, self);
