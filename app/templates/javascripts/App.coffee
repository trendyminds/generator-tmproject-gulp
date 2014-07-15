$ = require 'jquery'
Template = require './templates/app.hbs'

class App

  constructor: ->

    console.log 'created: App'
    $('body').append Template()

App

new App
