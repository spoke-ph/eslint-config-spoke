# Change Log

This repository adheres to semantic versioning and follows the conventions of [keepachangelog.com](http://keepachangelog.com)

## [Unreleased]

## [0.9.0] - 2022-05-31
### Added
- ESLint rule `curly` to automatically fix inline code body for `if`, `else`, `for` and `while` etc
- ESLint rule `@typescript-eslint/indent` to typescript config to automatically fix Typescript node indentation issues

### Changed
- Moved `eslint-plugin-simple-import-sort` from `peerDependencies` to `dependencies`

## [0.8.0] - 2022-03-29
### Added
- New `simple-import-sort/imports` linting rule and `simple-import-sort` peer dependency

## [0.7.0] - 2021-07-29
### Added
- New linting rules section in read me
- Use `org-global` context for CircleCI jobs

## [0.6.0] - 2021-02-28
### Added
- New `@typescript-eslint/naming-convention` to replace the removed rule
  - The rule options are constructed from our current use cases in other repositories

### Changed
- Upgrade
  - @spoke-ph/changelog                 1.0.2  →    1.2.0
  - eslint                             ^6.8.0  →  ^7.21.0
  - eslint-plugin-flowtype             ^4.5.3  →   ^5.3.1
  - @typescript-eslint/parser         ^2.14.0  →  ^4.15.2
  - @typescript-eslint/eslint-plugin  ^2.14.0  →  ^4.15.2

### Removed
- Removed rule `@typescript-eslint/class-name-casing`

## [0.5.0] - 2021-01-11
### Changed
- `comma-dangle.objects` to `never` This added more work than value for existing repositories

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

[Unreleased]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.9.0...HEAD
[0.9.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/spoke-ph/eslint-config-spoke/compare/v0.1.0...v0.2.0
