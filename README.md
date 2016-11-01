# Description
This plugin provides the ability to use [ng-annotate](https://github.com/olov/ng-annotate) on plain old javascripts sources while loading them. Note: This plugin is and will only be tested with jspm 0.17(-beta).
# Installation
Currently, you have to install it from github directly via:
```jspm install --dev ng-annotate=github:DorianGrey/plugin-ng-annotate@0.1.0```
Naming the alias is up to you, the above is just a suggestion.

# Usage
In your `jspm.config.js`, configure your source package with a meta information, e.g.:
```javascript
packages: {
  "assets/javascripts/legacy": {
    "format": "cjs",
    "defaultExtension": "js",
    "meta": {
      "*.js": {
        "loader": "ng-annotate"
      }
    }
  }
}
```
## Customize options for ng-annotate
If required, you may define some options to be used by [ng-annotate](https://github.com/olov/ng-annotate) by adding entry to your `jspm.config.js`:
```javascript
ngAnnotateOptions: {
  add: true,
  // ...
}
```
If **not** explicitly provided, `{add: true}` will be used as the default basis for further processing default. This should be sufficient for most cases. Please note that a potentially existing options entry `map` will be overwritten for proper source map handling.

# Thanks to
- @olov for creating [ng-annotate](https://github.com/olov/ng-annotate)
