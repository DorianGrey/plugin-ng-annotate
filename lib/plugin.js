const ngAnnotate = require("ng-annotate");

function translate(load) {
	const annotated = ngAnnotate(load.source, {add: true});
	if (annotated.errors) {
		return Promise.reject(annotated.errors.join("\n"));
	} else {
		load.source = annotated.src;
		return Promise.resolve(load);
	}
}

exports.translate = translate;
