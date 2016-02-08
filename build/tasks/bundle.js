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
      '[*.js]',
        '[./src/**/*.js]',
        '[./src/*.js]',
        './src/*.html!text',
        './src/**/*.html!text',
        './styles/*.css!text',
        '*.html!text'
      ],
      options: {
        "inject": true,
        "minify": true,
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
       "font-awesome/fonts/*.*!text",
      "twbs/bootstrap",
      "twbs/bootstrap/css/bootstrap.css!text",
     "twbs/bootstrap/font/*.*",
      "babel",
      "core-js",
      "text",
      "font-awesome",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/create-decorated-class",
      "babel-runtime/helpers/define-decorated-property-descriptor",
      "jspm_packages/npm/core-js@1.2.6/library/fn/object/define-property",

    ],
      options: {
        "inject": true,
        "minify": true,
        "rev": false
      }
    }
  }
};

gulp.task('bundle', function() {
  return bundle(config);
});
