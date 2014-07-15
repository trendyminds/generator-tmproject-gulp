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
        this.installDependencies();
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
    }, {
      type: 'list',
      name: 'projectType',
      message: 'What CMS will this project use?',
      choices: [{
        name: 'ExpressionEngine',
        value: 'projectTypeEE',
      }, {
        name: 'Craft',
        value: 'projectTypeCraft'
      }, {
        name: 'None',
        value: 'projectTypeBasic'
      }]
    }];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      var projectType = props.projectType;

      function hasFeature(feat) { return projectType.indexOf(feat) !== -1; }

      // manually deal with the response, get back and store the results.
      // we change a bit this way of doing to automatically do this in the self.prompt() method.
      this.projectTypeEE = hasFeature('projectTypeEE');
      this.projectTypeCraft = hasFeature('projectTypeCraft');
      this.projectTypeBasic = hasFeature('projectTypeBasic');

      done();
    }.bind(this));
  },

  app: function () {
    this.copy('_htaccess', 'app/.htaccess');
    this.copy('_package.json', 'package.json');
    this.copy('_gulpfile.js', 'gulpfile.js');

    this.directory('gulp', 'gulp');
    this.directory('stylesheets', 'app/assets/stylesheets');
    this.directory('javascripts', 'app/assets/javascripts');
    this.directory('templates', 'app/assets/templates');

    this.mkdir('app/assets/images');

    if (this.projectTypeBasic) {
      this.copy('_index.html', 'app/index.html');
    } else if (this.projectTypeCraft) {
      this.mkdir('app/craft/templates');
      this.copy('_index.html', 'app/craft/templates/index.html');
    } else if (this.projectTypeEE) {
      this.mkdir('app/templates/default_site/site.group');
      this.copy('_index.html', 'app/templates/default_site/site.group/index.html');
    }

    if (this.projectTypeCraft || this.projectTypeEE) {
      this.mkdir('app/uploads')
    }
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
