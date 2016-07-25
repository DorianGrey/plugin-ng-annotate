# Description
This plugin provides the ability to use [ng-annotate](https://github.com/olov/ng-annotate) on plain old javascripts sources while loading them. Note: This plugin is and will only be tested with jspm 0.17-beta.
# Installation
Currently, you have to install it from github directly via:
```jspm install --dev ng-annotate=github:DorianGrey/plugin-ng-annotate@0.0.1```
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
  },
}
```
# TODO
- Somehow configure ng-annotate.
- Check and potentially fix source-map handling.


