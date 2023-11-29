/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: "consumer",
          remotes: {
            header: `header@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          exposes: {
           //  './stores': './src/stores/index.ts'
            // './src': './src'
          },
          
          filename: "static/chunks/remoteEntry.js",

          shared: {
        //   shared_state: {
        //   requiredVersion: '1.0.0'
        // },
          },
        })
      );
    }

    return config;
  },
};
