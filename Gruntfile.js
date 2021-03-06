/*global module:false*/

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            compass: {
                files: ['src/styles/scss/{,*/}*.{scss,sass}'],
                tasks: ['compass:dev'],
                options: {
                    livereload: true,
                },
            },
            jshint: {
                files: ['src/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true,
                },
            },
            templates: {
                files: ['{,*/}*.html'],
                options: {
                    livereload: true,
                },
            }
        },

        compass: {
            options: {
                // require: 'register compass plugin here'
                sourcemap: true,
                bundleExec: true,
                noLineComments: true
            },
            dev: {
                options: {
                    sassDir: 'src/styles/scss/',
                    cssDir: 'src/styles/css/'
                }
            },
            prod: {
                options: {
                    sassDir: 'src/styles/scss/',
                    cssDir: 'dist/styles/css/',
                    environment: 'production'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'src/scripts/*.js',
                '!src/scripts/libs/*.js',
                '!src/scripts/*.min.js',
                '!src/scripts/modernizr.js'
            ]
        },

        //Publish separate modules
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'src/scripts',
                    optimize: 'uglify',
                    dir: 'dist/scripts',
                    useStrict: true,
                    wrap: true
                }
            }
        },

        //Publish one compressed file
        // requirejs: {
        //     dist: {
        //         options: {
        //             mainConfigFile : 'src/scripts/config.js',
        //             baseUrl : 'src/scripts',
        //             removeCombined: false,
        //             name: 'config',
        //             out: 'dist/scripts/config.js',
        //             optimize: 'uglify',
        //             findNestedDependencies: true
        //         }
        //     }
        // },

        modernizr: {
            dist: {
                'devFile': 'src/scripts/modernizr.js',
                'outputFile': 'dist/scripts/modernizr.js',
                'extra': {
                    'shiv': true,
                    'printshiv': false,
                    'load': true,
                    'mq': false,
                    'cssclasses': true
                },
                'extensibility': {
                    'addtest': false,
                    'prefixed': false,
                    'teststyles': false,
                    'testprops': false,
                    'testallprops': false,
                    'hasevents': false,
                    'prefixes': false,
                    'domprefixes': false
                }
            }
        },

        webfont: {
            icons: {
                src: 'src/styles/img/font/*.svg',
                dest: 'src/styles/fonts/',
                destCss: 'src/styles/scss/',
                options: {
                    stylesheet: 'scss',
                    font: 'icons'
                }
            }
        },

        removelogging: {
            dist: {
                src: 'src/**/*.js',
                dest: 'dist/**/*.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-remove-logging');

    grunt.registerTask('default', ['compass:dev', 'jshint', 'modernizr']);
    grunt.registerTask('sass', ['compass:dev']);
    grunt.registerTask('js', ['jshint']);
    grunt.registerTask('prod', ['compass:prod', 'modernizr', 'requirejs']);

};