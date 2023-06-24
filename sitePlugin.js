module.exports = function (context, options) {
  return {
    name: "custom-docusaurus-plugin",
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            path: require.resolve("path-browserify"),
          },
          fallback: {
            buffer: require.resolve("buffer"),
            crypto: require.resolve("crypto-browserify"),
            fs: require.resolve("browserify-fs"),
            path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify"),
            util: require.resolve("util/"),
          },
        },
      };
    },
  };
};
