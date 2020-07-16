# Spoke Eslint Config
![](https://media1.tenor.com/images/83a5243f6c77e72b06b42de07b30053a/tenor.gif)

This package provides Spoke's .eslintrc as an extensible [shared config](https://eslint.org/docs/developer-guide/shareable-configs) :sparkles:

## Install and Setup
Install the library using
```
npm install --save-dev eslint--config-spoke
```


## Usage
Create a `.eslintrc` file in the root of the repo you are working on and extend the preset/config you wish to use

e.g. using the `typescriptService` and `mocha` linting rules
```
{
  "extends": ["spoke/presets/typescriptService", "spoke/configs/mocha"]
}
```
