const mode = process.env.NODE_ENV;
const isProd = mode === "production";
const coreJsVersion = require("core-js/package.json").version;

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-env"],

    plugins: [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-object-assign",
      "@babel/plugin-syntax-dynamic-import",
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 3,
          version: coreJsVersion,
        },
      ],
    ].concat(
      isProd ? ["transform-remove-console", "transform-remove-debugger"] : []
    ),
  };
};
