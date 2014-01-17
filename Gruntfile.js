module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			"options": { "separator": ";" },
			"build": {
				"src": [
					"src/prefix",
					"src/minErr.js",
					"src/apis.js",
					"src/loader.js",
					"src/pre-injector.js",
					"src/injector.js",
					"src/suf-injector.js",
					"src/suffix"
				],
				"dest": "build/injector.js"
			}
		}
	});
	// Load required modules
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat']);
};



