'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var TmprojectGulpGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies({
          callback: function () {
            this.spawnCommand('gulp', ['build']);
          }.bind(this)
        });
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous TmprojectGulp generator!'));

    var prompts = [{
      name: 'projectName',
      message: 'What is the project name?'
    }];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      done();
    }.bind(this));
  },

  app: function () {
    this.copy('_htaccess', 'app/.htaccess');
    this.copy('_package.json', 'package.json');
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_editorconfig', '.editorconfig');
    this.mkdir('app/assets/images');
    this.copy('_index.html', 'app/index.html');
    this.directory('gulp', 'gulp');
    this.directory('stylesheets', 'app/assets/stylesheets');
    this.directory('javascripts', 'app/assets/javascripts');
  },

  projectfiles: function () {
    this.copy('_gitignore', '.gitignore');
  },

  bowerJs: function bowerJs() {
    this.copy('_bower.json', 'bower.json');
    this.copy('_bowerrc', '.bowerrc');
  }
});

module.exports = TmprojectGulpGenerator;
