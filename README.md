# Spoke Eslint Config
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

## Linting Rules
  ### Importing files
  Rule: Keep the dependencies at the top, followed by a white line, then list any local file imports.
  
  Repository: All
  
  Example:
  ```
  import React from "react"
  //Empty line
  import NavBar from "./NavBar"
  ```
