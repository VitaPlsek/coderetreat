module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      './*.ts',
      './*.spec.ts'
    ],

    exclude: [
    ],

    preprocessors: {
      '**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
      options: {
        sourceMap: true, // generate source maps
        noResolve: false // enforce type resolution
      },
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
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
}
