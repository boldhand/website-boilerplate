module.exports = function (grunt) {
	
	'use strict';

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true,
                    "img-alt-require": true,
                    "id-class-value": "dash",
                    "doctype-html5": true,
                    "attr-value-not-empty": true
                },
                src: ['*.html']
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: require('node-neat').includePaths
                },
                files: {
                    'css/main.css' : 'css/main.scss'
                }
            }
        },

        autoprefixer: {
			dist: {
				files: {
					'css/main.css' : 'css/main.css'
				}
			}
		},

        uglify: {
            build: {
                files: {
                    'js/min/main.min.js': ['js/main.js'],
                    'js/min/plugins.min.js': ['js/plugins.js']
                }
            }
        },
		
		imagemin: {
			jpgs: {
				options: {
					progressive: true
				},
				files: [{
					expand: true,
					cwd: 'img/source',
					src: ['*.jpg'],
					dest: 'img/'
				}]
			}
		},
		
		watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['*.html'],
                tasks: ['htmlhint']
            },
            css: {
                files: ['css/**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        }

    });

    grunt.registerTask('server', ['connect:server', 'watch']);

};