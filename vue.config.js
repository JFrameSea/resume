
const Timestamp = new Date().getTime();
module.exports = {
  devServer: {

    port: 8080,

    host: "0.0.0.0",

    https: false,

    open: false,
  },

  assetsDir: 'static',
  publicPath: '/',

  configureWebpack: {
    externals: {
    },
    output: {
      filename: `static/js/[name].${Timestamp}.js`,
      chunkFilename: `static/js/[name].${Timestamp}.js`
    }
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/variable.scss";
        `
      }
    }
  },
};
