const ngAnnotate               = require("ng-annotate");
const defaultNgAnnotateOptions = {add: true};

function translate(load) {
	const hasSourceMap          = !!load.metadata.sourceMap;
	var ngAnnotateOptionsObject = System.ngAnnotateOptions || defaultNgAnnotateOptions;

	// The source file might not have a source-map, thus, we have to take care of it.
	if (hasSourceMap) {
		ngAnnotateOptionsObject.map = load.metadata.sourceMap;
	}

	const annotated = ngAnnotate(load.source, System.ngAnnotateOptions || defaultNgAnnotateOptions);
	// annotated.map includes the resulting source map.
	if (annotated.errors) {
		return Promise.reject(annotated.errors.join("\n"));
	} else {
		load.source = annotated.src;
		// If there was a source-map before, a target map was generated, thus ...
		if (hasSourceMap) {
			load.metadata.sourceMap.mappings = annotated.map;
		}
		return Promise.resolve(load);
	}
}

exports.translate = translate;
