generator-tmproject-gulp
===================

This is a project generator to quick start a new web project. This Yeoman generator will set up your directories and provide you with two Gulp tasks: `$ gulp` for development and `$ gulp build` to compile your project.

## Requirements
* [node.js](http://nodejs.org/)
* [Gulp](http://gulpjs.com/) `$ npm install -g gulp`
* [Yeoman](http://yeoman.io/) `$ npm install -g yo`

## Installing generator-tmproject-gulp
Run `$ npm install -g generator-tmproject-gulp`

## Setup a new project
1. Create an empty directory for your project: `$ mkdir ~/Sites/my_new_project && cd $_`
2. Run the generator: `$ yo tmproject-gulp`

## Project directories
You will be asked a couple basic questions to start your project up. When you are done you should have a project directory that looks like this:

```
+ app
  + bower_components/
  + assets/images/
  + assets/javascripts/
  + assets/stylesheets/  
  .htaccess
  index.html
+ dist
  + assets/javascripts/
  + assets/images/
  + assets/stylesheets/
  .htaccess
  index.html
+ gulp
		+ tasks
	index.js
.bowerrc
.gitignore
bower.json
Gemfile
gulpfile.js
package.json
```

## About your new project
### bower_components/
[Bower](http://bower.io) will manage your project dependencies. If you run jQuery, Fancybox, Flexsider or any other libraries this is where they'll live.

#### Adding libraries to your project
If you need to add Fancybox to your project you can search the Bower library for it by running `$ bower search fancybox`. Once you find the one you are looking for, just run `$ bower install fancybox -S` and the Fancybox library will now be in `app/bower_components`. You can also remove a dependency by running `$ bower uninstall fancybox -S`.

**Note:** You must use `-S` in your bower command to add the dependency to your `bower.json` file.

#### Related files
`.bowerrc`: Configures the path to the `bower_components` directory (don't change this)
`bower.json`: Specifies all of the dependencies used in the project.

### images/
Place any project images in this directory. Running `$ gulp build` will move your images to `dist/images` and compress them.

#### Using CoffeeScript
CoffeeScript files must be referenced with a `.js` extension. For example, if your CoffeeScript file is located at `javascripts/form/myfile.coffee` your HTML should be `<script src="/_compiled/javascripts/form/myfile.js"></script>`.

### stylesheets/
You are able to use `.scss` and `.css` files (though I'd recommend just using `.scss`). If you are running the `$ gulp` process, you may want to restart it when creating new files.

#### Paths
If you want to reference a `.scss` or `.css` file in your template you *must* use `_compiled` in your path. For example, if your `.scss` file is located at `stylesheets/myfile.scss` your HTML should be `<link rel="stylesheet" href="/_compiled/stylesheets/myfile.css">`.

### dist/
This is the compiled version of your web project. You deploy this, and only this, folder to the web server.

### Miscellaneous files
- `.gitignore`: A standard gitignore file to ignore compiled directories and other OS-based files and folders.
- `.htaccess`: A basic htaccess file provided by the [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess).
- `gulpfile.js`: A list of the tasks that run on `$ gulp` and `$ gulp build`
- `package.json`: A list of dependencies for the Gulp tasks.

## Release History
* 2014-9-30 - v1.0.7 - Replace gulp-useref with gulp-usemin

* 2014-7-20 - v1.0.0 - Initial release
