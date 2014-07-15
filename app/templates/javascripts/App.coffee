$ = require 'jquery'
MyModule = require './modules/MyModule.coffee'

class App

  constructor: ->

    myModule = new MyModule()

    console.log 'created: App'

App

new App
