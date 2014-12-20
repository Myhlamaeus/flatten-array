"use strict";

const traceur = require("traceur");

traceur.require.makeDefault(function(filename) {
    // don't transpile our dependencies, just our app
    return filename.indexOf("node_modules") === -1;
});

["flatten-array"].map(function(file) {
    return "./" + file + ".es6";
}).forEach(require);