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