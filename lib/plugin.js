const ngAnnotate               = require("ng-annotate");
const defaultNgAnnotateOptions = {add: true};

function translate(load) {
	const annotated = ngAnnotate(load.source, System.ngAnnotateOptions || defaultNgAnnotateOptions);
	if (annotated.errors) {
		return Promise.reject(annotated.errors.join("\n"));
	} else {
		load.source = annotated.src;
		return Promise.resolve(load);
	}
}

exports.translate = translate;
