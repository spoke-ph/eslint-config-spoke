module.exports = {
  plugins: [
    "flowtype"
  ],
  extends: [
    "plugin:flowtype/recommended"
  ],
  rules: {
    // Disallows Flow type imports, exports, aliases, and annotations in files missing a valid Flow file declaration (or a @noflow annotation).
    "flowtype/no-types-missing-file-annotation": 0
  }
};
