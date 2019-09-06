module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			release: {
				src: ["dist/*.js"]
			}
		},
		uglify: {
			options: {
				banner: 
`/**
 * EasyQRCodeJS
 * 
 * Cross-browser QRCode generator for pure javascript. Support Dot style, Logo, Background image, Colorful, Title, etc.(Running with DOM on client side)
 * 
 * Version <%=pkg.version %>
 * 
 * @author [ inthinkcolor@gmail.com ]
 * 
 * @see https://github.com/ushelp/EasyQRCodeJS 
 * @see http://www.easyproject.cn/easyqrcodejs/tryit.html
 * @see https://github.com/ushelp/EasyQRCodeJS-NodeJS
 * 
 * Copyright 2017 Ray, EasyProject
 * Released under the MIT license
 * 
 * [Support AMD, CMD, CommonJS/Node.js]
 * 
 */`
			},
			build: {
				src: 'src/*.js',
				dest: 'dist/easy.qrcode.min.js'
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('release', ['clean', 'uglify']);
	grunt.registerTask('default', ['release']);
};