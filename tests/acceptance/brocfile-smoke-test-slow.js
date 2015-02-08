/*
'use strict';

// var Promise    = require('../../lib/ext/promise');
var path       = require('path');
var fs         = require('fs-extra');
// var remove     = Promise.denodeify(fs.remove);

var expect     = require('chai').expect;
var EOL        = require('os').EOL;

var runCommand          = require('../helpers/run-command');
var acceptance          = require('../helpers/acceptance');
var copyFixtureFiles    = require('../helpers/copy-fixture-files');
var assertDirEmpty      = require('../helpers/assert-dir-empty');
var createTestTargets   = acceptance.createTestTargets;
var teardownTestTargets = acceptance.teardownTestTargets;
var linkDependencies    = acceptance.linkDependencies;
var cleanupRun          = acceptance.cleanupRun;

var appName  = 'some-cool-app';

describe('Acceptance: brocfile-smoke-test', function() {
  before(function() {
    this.timeout(360000);
    return createTestTargets(appName);
  });

  after(function() {
    this.timeout(15000);
    return teardownTestTargets();
  });

  beforeEach(function() {
    this.timeout(360000);
    return linkDependencies(appName);
  });

  afterEach(function() {
    this.timeout(15000);
    return cleanupRun().then(function() {
      assertDirEmpty('tmp');
    });
  });

  it('a custom environment config can be used in Brocfile.js', function() {
    this.timeout(450000);

    return copyFixtureFiles('brocfile-tests/custom-environment-config')
      .then(function() {
        return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test', '--silent');
      });
  });

  it('using wrapInEval: true', function() {
    this.timeout(450000);

    return copyFixtureFiles('brocfile-tests/wrap-in-eval')
      .then(function() {
        return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test', '--silent');
      });
  });

  it('without app/templates', function() {
    this.timeout(450000);

    return copyFixtureFiles('brocfile-tests/pods-templates')
      .then(function(){
        // remove ./app/templates
        return remove(path.join(process.cwd(), 'app/templates'));
      }).then(function() {
        return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test');
      });
  });

  it('default development build tests', function() {
    this.timeout(450000);

    return copyFixtureFiles('brocfile-tests/default-development')
    .then(function() {
      return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test', '--silent');
    });
  });

  it('using pods based templates', function() {
    this.timeout(450000);

    return copyFixtureFiles('brocfile-tests/pods-templates')
      .then(function() {
        return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test', '--silent');
      });
  });

  it('using pods based templates with a podModulePrefix', function() {
    this.timeout(450000);

    return copyFixtureFiles('brocfile-tests/pods-with-prefix-templates')
      .then(function() {
        return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test', '--silent');
      });
  });

  it('addon trees are not jshinted', function() {
    this.timeout(450000);

    return copyFixtureFiles('brocfile-tests/jshint-addon')
      .then(function() {
        var packageJsonPath = path.join(__dirname, '..', '..', 'tmp', appName, 'package.json');
        var packageJson = JSON.parse(fs.readFileSync(packageJsonPath,'utf8'));
        packageJson['ember-addon'] = {
          paths: ['./lib/ember-random-thing']
        };

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson));

        var badContent = 'var blah = ""' + EOL + 'export default Blah;';
        var appPath = path.join('.', 'lib', 'ember-random-thing', 'app',
                                          'routes', 'horrible-route.js');
        var testSupportPath = path.join('.', 'lib', 'ember-random-thing', 'test-support',
                                          'unit', 'routes', 'horrible-route-test.js');

        fs.writeFileSync(appPath, badContent);
        fs.writeFileSync(testSupportPath, badContent);
      })
      .then(function() {
        return runCommand(path.join('.', 'node_modules', 'ember-cli', 'bin', 'ember'), 'test', '--silent');
      });
  });

});
*/
