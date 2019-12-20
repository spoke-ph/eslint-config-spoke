module.exports = {
  extends: [
    "eslint:recommended"
  ],
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "double",
      { "allowTemplateLiterals": true }
    ],
    semi: [
      "error",
      "always"
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "all"
      }
    ],
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "comma-spacing": ["error"],
    "generator-star-spacing": ["error", { before: false, after: true }],
    "eol-last": ["error", "always"],
    "arrow-spacing": ["error"],
    "space-in-parens": ["error"],
    "no-multi-spaces": ["error"],
    "no-trailing-spaces": ["error"],
    "no-console": "off",
    "object-curly-spacing": ["error", "always"],
    "keyword-spacing": ["error", { after: true }],
    "max-lines": ["error", {
      max: 600,
      skipBlankLines: true,
      skipComments: true
    }]
  }
};
