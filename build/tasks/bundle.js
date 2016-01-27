var gulp = require('gulp');
var bundle = require('aurelia-bundler').bundle;

var config = {
  force: true,
  baseURL: '.',                   // baseURL of the application
  configPath: './config.js',      // config.js file. Must be within `baseURL`
  bundles: {
    "dist/app-build": {
      includes: [
        '[*.js]',
        '*.html!text',
        '*.css!text'
      ],
      options: {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": true
      }
    },
   "dist/vendor-build": {
    includes: [
      'aurelia-bootstrapper',
      'aurelia-fetch-client',
      'aurelia-router',
      'aurelia-binding',
      'aurelia-dependency-injection',
      'aurelia-event-aggregator',
      'aurelia-framework',
      'aurelia-history-browser',
      'aurelia-loader-default',
      'aurelia-templating-binding',
      'aurelia-templating-resources',
      'polymer/mutationobservers',
      'aurelia-templating-router',
      'fetch',
      "bluebird",
      "jquery",
      "font-awesome",
      "twbs/bootstrap",
      "babel",
      "core-js",
      "text",
      "font-awesome"
    ],
      options: {
        "inject": true,
        "minify": true,
        "rev": true
      }
    }
  }
};

gulp.task('bundle', function() {
  return bundle(config);
});
