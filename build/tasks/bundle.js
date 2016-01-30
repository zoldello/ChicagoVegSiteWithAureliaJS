var gulp = require('gulp');
var bundle = require('aurelia-bundler').bundle;

var config = {
  force: true,
  baseURL: '.',                   // baseURL of the application
  configPath: './config.js',      // config.js file. Must be within `baseURL`
  bundles: {
    "dist/app-build": {
      includes: [
        '[*]',
        '*.html!text',
        './src/**/*.html',
        './src/**/*js',
        '*.css!text'
      ],
      options: {
        "inject": false,
        "minify": true,
        "depCache": true,
        "rev": false
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
        "inject": false,
        "minify": true,
        "rev": false
      }
    }
  }
};

gulp.task('bundle', function() {
  return bundle(config);
});
