module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: require.resolve('../node_modules/eslint-config-airbnb-base'),
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
