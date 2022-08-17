// Adapted from:
// https://github.com/AllJoyn-Cordova/cordova-plugin-alljoyn/blob/master/scripts/beforePluginInstall.js

const path = require('path');
const exec = require('child_process').exec;

const packageName = require('../package.json').name;

module.exports = function () {
    return new Promise(function (resolve, reject) {

        exec('npm install', { cwd: path.join('plugins', packageName) },
            function (error, stdout, stderr) {
                if (error !== null) {
                    reject();
                } else {
                    resolve();
                }
            }
        );
    });
};
