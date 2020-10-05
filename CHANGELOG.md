# Change Log

This repository adheres to semantic versioning and follows the conventions of [keepachangelog.com](http://keepachangelog.com)

## [Unreleased]

## [0.4.0] - 2020-10-03
### Added
- ESLint rules. These can be automatically fixed.
  - `brace-style` for if-else try-catch etc
  - `array-bracket-spacing`
  - `space-before-blocks`
  - `space-before-function-paren`
  - `comma-dangle` to enforce dangling commas or multi-line items in objects

## [0.3.0] - 2020-07-24
### Removed
- Dependency on tslint
  - Only the tslint `one-line` rule is not covered by configured eslint defaults.

## [0.2.0] - 2020-07-16
### Added
- `node` Preset

## 0.1.0 - 2020-01-06
### Added
- `babel`, `common`, `flow`, `mocha`, `node` and `typecript` Configs
- `common`, `flowService` and `typescriptService` Presets

[Unreleased]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.1.0...v0.2.0
