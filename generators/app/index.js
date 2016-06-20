var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);

    this.option('name');
  },
  method1: function() {
    console.log('method 1 just ran');
  }
});

