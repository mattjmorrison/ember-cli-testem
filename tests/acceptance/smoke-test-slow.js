/*
'use strict';

var path     = require('path');
var fs       = require('fs');
var crypto   = require('crypto');
var expect   = require('chai').expect;
var walkSync = require('walk-sync');
var appName  = 'some-cool-app';
var EOL      = require('os').EOL;

var runCommand          = require('../helpers/run-command');
var acceptance          = require('../helpers/acceptance');
var copyFixtureFiles    = require('../helpers/copy-fixture-files');
var killCliProcess      = require('../helpers/kill-cli-process');
var assertDirEmpty      = require('../helpers/assert-dir-empty');
var createTestTargets   = acceptance.createTestTargets;
var teardownTestTargets = acceptance.teardownTestTargets;
var linkDependencies    = acceptance.linkDependencies;
var cleanupRun          = acceptance.cleanupRun;

describe('Acceptance: smoke-test', function() {
  before(function() {
    this.timeout(360000);
    return createTestTargets(appName);
  });

  after(function() {
    this.timeout(20000);
    return teardownTestTargets();
  });

  beforeEach(function() {
    this.timeout(20000);
    return linkDependencies(appName);
  });

  afterEach(function() {
    this.timeout(20000);

    return cleanupRun().then(function() {
      assertDirEmpty('tmp');
    });
  });

  it('ember new foo, clean from scratch', function() {
    this.timeout(450000);

    return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test', '--silent');
  });

});
*/
