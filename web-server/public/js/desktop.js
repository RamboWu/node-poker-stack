
requirejs.config({
    paths : {
        "jquery"            : "libs/jquery-1.8.0.min",
        "underscore"        : "libs/underscore",
        "backbone"          : "libs/backbone-min",
        "bootstrap"         : "libs/bootstrap.min",
        "socketio"          : "libs/socket.io",
        "resources"         : 'libs/resources'

    },
    shim : {
        "bootstrap"  : {
            "deps"    : ["jquery"]
        },
        "backbone" : {
            deps : ['bootstrap',  'socketio']
        }
    }
});
requirejs(['jquery', 'backbone', 'routers/desktopRouter', 'bootstrap', 'resources'], function($, Backbone, Desktop){
    this.router = new Desktop();
});