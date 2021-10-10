module.exports = {
  extends: ["eslint:recommended", "plugin:json/recommended", "prettier"],
  plugins: ["import", "prettier"],
  env: {
    commonjs: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  rules: {
    "import/no-commonjs": 0,
    "import/no-nodejs-modules": 0,
    "prettier/prettier": "error",
  },

  overrides: [
    {
      extends: ["node"],
      files: ["**/*.cjs"],
      plugins: ["node"],
      rules: {
        "import/no-commonjs": 0,
      },
    },
  ],
};
