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
        '*.css!text',        
      ],
      options: {
        inject: true,
        minify: true
      }
    },
   "dist/vendor-build.js": { 
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
      'fetch'
    ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};

gulp.task('bundle', function() {
  return bundle(config);
});