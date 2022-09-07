module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "plugin:prettier/recommended"],
  // required to lint *.vue files
  plugins: ["vue", "prettier"],
  // add your custom rules here
  rules: {
    "prettier/prettier": "off",
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
