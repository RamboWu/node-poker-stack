
requirejs.config({
    paths : {
        "jquery"            : "libs/jquery-1.8.0.min",
        "underscore"        : "libs/underscore",
        "backbone"          : "libs/backbone-min",
        "bootstrap"         : "libs/bootstrap.min",
        "pomeloclient"      : "libs/pomeloclient",
        "socketio"          : "/socket.io/socket.io.js",
        "resources"         : 'libs/resources'

    },
    shim : {
        "bootstrap"  : {
            "deps"    : ["jquery"]
        },
        "backbone" : {
            deps : ['bootstrap', 'pomeloclient', 'socketio']
        }
    }
});
requirejs(['jquery', 'backbone', 'routers/desktopRouter', 'bootstrap', 'resources'], function($, Backbone, Desktop){
    this.router = new Desktop();
});