/* jshint node: true */
'use strict';

var path  = require('path');
var TestCommand = require('./lib/commands/test');
var pickFiles   = require('ember-cli/lib/broccoli/custom-static-compiler');

module.exports = {
  name: 'ember-cli-testem',
  includedCommands: function(){
    return {
      'TestemCommand': TestCommand
    };
  },
  contentFor: function(type, config){
    var content = [];
    if (type == 'body-footer') {
      content.push('<script src="testem.js"></script>');
      content.push('<script src="assets/test-loader.js"></script>');
    }
    return content.join('\n');
  },
  treeFor: function(tree){
    var testemPath = path.join(__dirname, 'lib', 'broccoli', 'testem');
    testemPath = path.dirname(testemPath);

    return pickFiles(testemPath, {
        files: ['testem.js'],
        srcDir: '/',
        destDir: '/'
      });
  }
};
