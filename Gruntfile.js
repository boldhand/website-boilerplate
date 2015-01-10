module.exports = function(grunt){

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
                    "attr-value-not-empty": true,
                },
                src: ['*.html']
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: ['*.html'],
                tasks: ['htmlhint']
            },
            css: {
                files: ['css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }, 
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: require('node-bourbon').includePaths,
                    loadPath: require('node-neat').includePaths
                },
                files: {
                    'css/main.css': 'css/main.scss'
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

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                }
            }
        }

    });

    /*grunt.registerTask('default', []);*/
    grunt.registerTask('server', ['connect:server', 'watch']);

};