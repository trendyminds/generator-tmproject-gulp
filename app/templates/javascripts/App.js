let $ = require('jquery');
let MyModule = require('./modules/MyModule');

class App {

  constructor () {
    let myModule = new MyModule();
    console.log('created: App');
  }

}

App

new App
