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
        "@typescript-eslint/naming-convention": ["error",
            {
                selector: "default",
                format: ["camelCase"],
                leadingUnderscore: "allow"
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
                leadingUnderscore: "allow"
            },
            {
                selector: "function",
                format: ["camelCase"],
                leadingUnderscore: "allow"
            },
            {
                selector: ["typeLike", "typeAlias", "typeParameter"],
                format: ["PascalCase"],
                leadingUnderscore: "allow"
            },
            {
                selector: "enumMember",
                format: ["PascalCase", "camelCase"]
            },
            {
                selector: ["typeProperty", "typeAlias", "typeParameter"],
                format: ["PascalCase", "camelCase"],
                leadingUnderscore: "allow"
            },
            {
                selector: ["objectLiteralProperty", "objectLiteralMethod"],
                format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"] // snake_case is for some external APIs and libraries
            }
        ],
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
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/indent": [
            "error",
            2,
            {
                SwitchCase: 1
            }
        ],
    }
};
