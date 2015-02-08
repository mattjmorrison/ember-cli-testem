/*
'use strict';

var Promise    = require('ember-cli/lib/ext/promise');
var path       = require('path');
var fs         = require('fs-extra');
var remove     = Promise.denodeify(fs.remove);
var expect     = require('chai').expect;
var addonName  = 'some-cool-addon';
var spawn      = require('child_process').spawn;
var chalk      = require('chalk');
var expect     = require('chai').expect;

var runCommand          = require('../helpers/run-command');
var copyFixtureFiles    = require('../helpers/copy-fixture-files');
var killCliProcess      = require('../helpers/kill-cli-process');
var assertDirEmpty      = require('../helpers/assert-dir-empty');
var acceptance          = require('../helpers/acceptance');
var createTestTargets   = acceptance.createTestTargets;
var teardownTestTargets = acceptance.teardownTestTargets;
var linkDependencies    = acceptance.linkDependencies;
var cleanupRun          = acceptance.cleanupRun;

describe('Acceptance: addon-smoke-test', function() {

  before(function() {
    this.timeout(360000);
    return createTestTargets(addonName, {
      command: 'addon'
    });
  });

  after(function() {
    this.timeout(15000);
    return teardownTestTargets();
  });

  beforeEach(function() {
    this.timeout(360000);
    return linkDependencies(addonName);
  });

  afterEach(function() {
    this.timeout(15000);
    return cleanupRun().then(function() {
      assertDirEmpty('tmp');
    });
  });

  it('ember addon foo, clean from scratch', function() {
    this.timeout(450000);
    return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test');
  });

  it('can render a component with a manually imported template', function() {
    this.timeout(450000);

    return copyFixtureFiles('addon/component-with-template')
      .then(function() {
        return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test');
      });
  });

});
*/
