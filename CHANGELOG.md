# Changelog

All notable changes to this project will be documented in this file.

The schema for this changelog is as follows:

-   Added: for new features or documents
-   Changed: for changes in existing functionality
-   Removed: for removed features or documents
-   Fixed: for bug fixes that occured this release
-   Bugs: for bugs that are allowed to go out in the release
-   Notes: for notes around the release that otherwise might not be known
-   Security: for security issues and vulnerabilities
-   Deprecated: for soon to be removed features

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] December 16, 2021

### Changed

-   New button functionality to be tested with typescript

## [1.0.0] December 16, 2021

### Added

-   CHANGELOG.md to keep track of how we are using our code

### Changed

-   Corrected the imports

### Bugs

-   Running into this bug in example package when using yarn link: https://github.com/styled-components/styled-components/issues/3045 The fix might have been mentioned here https://github.com/facebook/react/issues/15315#issuecomment-479802153 This bug does not currently occur when installed via npm

### Notes

-   Tested using yarn link in a simple create-react-app package and it worked with tree shaking but I am still getting the same error around styled components noted in the bugs section below
-   Tested by creating a npm package and it worked without a hitch

## [Example Version] - Example Date

### Section Title

-   Description of the section title changes
