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
          name: "header",

          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./components/Header": "./src/components/Header.tsx",
          },
           remotes: {
             consumer: `consumer@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          },
          shared: {
           
          },
        })
      );
    }

    return config;
  },
};
