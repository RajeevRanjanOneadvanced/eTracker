module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        noColor:false,
        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {

                    'styles/login.app.css': 'app/login/login.app.scss',
                    // 'styles/profile.app.css': 'app/profile/profile.app.scss'
                }
                // files: [{
                //     expand: true,
                //     cwd: 'app',
                //     src: ['**/*.scss'],
                //     dest: 'styles',
                //     ext: '.css'
                // }]
            }
        },
        protractor: {
            options: {
                // Location of your protractor config file
                configFile: "test/conf.js",

                // Do you want the output to use fun colors?
                noColor: true,

                // Set to true if you would like to use the Protractor command line debugging tool
                // debug: true,

                // Additional arguments that are passed to the webdriver command
                args: {
                    capabilities: {
                    // If --maxInstances is specified and greater than 1, run in parallel
                    maxInstances: 1,
                    shardTestFiles: false,
                    verbose: true
                }}
            },
            e2e: {
                options: {
                    // Stops Grunt process if a test fails
                    keepAlive: false
                }
            },
            continuous: {
                options: {
                    keepAlive: true
                }
            }
        },
        connect: {
            options: {
                port: 3000,
                hostname: 'localhost'
            },
            eTrackerWeb: {
                options: {
                    // set the location of the application files
                    base: ['./../eTrackerWeb']
                }
            }
            
        },
        watch: {
            options: {
                livereload: true
            },
            karma: {
                files: ['app/**/*.js', 'test/specs/*.js'],
                tasks: ['karma:continuous:run']
            },
            protractor: {
                files: ['app/**/*.js', 'test/specs/*.js'],
                tasks: ['protractor:continuous']
            }
        },
        copy: {
            templates: {
                files: [{
                    expand: true,
                    cwd: ['app'], // Parent folder of original CSS templates
                    src: '**/*.scss', // Collects all `*.css` files within the parent folder (and its subfolders)
                    dest: 'styles/', // Stores the collected `*.css` files in your `src/css/` folder
                    filter: function (dest) { // `dest`, in this instance, is the filepath of each matched `src`
                        var cwd = this.cwd, // Configures variables (these are documented for your convenience only)
                            src = dest.replace(new RegExp('^' + cwd), '');
                        dest = grunt.task.current.data.files[0].dest;
                        return (!grunt.file.exists(dest + src)); // Copies `src` files ONLY if their destinations are unoccupied
                    }
                }]
            }
        }
    });

    // task
    grunt.registerTask('sass', ['sass']);
    grunt.registerTask('protractor:loginScreen', ['connect:eTrackerWeb',  'protractor:e2e']);
    // grunt.registerTask('copy', ['copy']);

    // load plugin
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-protractor-runner');
};