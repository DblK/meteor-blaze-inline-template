import { Template } from 'meteor/templating';

import './main.html';
import './test.js';

Template.TestWrapper.helpers({
  async doSomething() {
    return await Promise.resolve(true)
  }
});
