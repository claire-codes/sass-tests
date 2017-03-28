// Test shim
var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, 'mixinTests.scss');
sassTrue.runSass({file: sassFile}, describe, it);