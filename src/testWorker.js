importScripts('script1.js');

var gl;
var color = {r:0.0, g:0.0, b:0.0, a:1.0};

self.addEventListener("message", function(e) {

    if(e.data.init) {
        var canvas = e.data.canvas;
        if(!gl) {
            gl = canvas.getContext("webgl");
        }

        gl.clearColor(color.r, color.g, color.b, color.a);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    if(e.data === "update") {
        color.r = Math.random() * 1.0;
        color.g = Math.random() * 1.0;
        color.b = Math.random() * 1.0;

        gl.clearColor(color.r, color.g, color.b, color.a);
        gl.clear(gl.COLOR_BUFFER_BIT);
    } else if(e.data === "stop") {
        self.close();
    }

}, false);