// Karma configuration
// Generated on Thu May 26 2016 09:11:13 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      './*.js',
      './*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
      './*.js': ['babel'],
      './*.spec.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    reporters: ['progress'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    singleRun: false,
    browsers: ['PhantomJS'],

    concurrency: Infinity
  })
};
