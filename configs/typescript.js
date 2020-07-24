module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "tsconfig.json",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint",
  ],
  "rules": {
      "@typescript-eslint/class-name-casing": "error",
      "@typescript-eslint/member-delimiter-style": [
          "error",
          {
              "multiline": {
                  "delimiter": "semi",
                  "requireLast": true
              },
              "singleline": {
                  "delimiter": "semi",
                  "requireLast": false
              }
          }
      ],
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/semi": [
          "error",
          "always"
      ],
      "@typescript-eslint/space-within-parens": [
          "off",
          "never"
      ],
      "@typescript-eslint/type-annotation-spacing": "error"
  }
};
