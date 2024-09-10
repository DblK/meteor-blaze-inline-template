import { Template } from 'meteor/templating';

import './main.html';
import './test.js';

Template.hello.helpers({
  async doSomething() {
    return Promise.resolve(true)
  }
});
