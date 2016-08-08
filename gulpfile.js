var _ = require( 'underscore' );

var bower = require( 'gulp-bower' );
var concat = require( 'gulp-concat' );
var debug = require( 'gulp-debug' );
var del = require( 'del' );
var gulp = require( 'gulp' );
// var sass = require( 'gulp-sass' );
// var sourcemaps = require( 'gulp-sourcemaps' );
var templates = require( 'gulp-angular-templatecache' );

var js = {
    src : [ 'tmp/templates.js', 'src/app.js', 'src/services/**/*.js', 'src/components/**/*.js' ],
    lib : []
};

var html = {
    src : [ 'src/**/*.html' ]
};

var styles = {
    src : [ 'src/**/*.css' ],
    lib : []
};

var templateCache = {
    path : 'tmp',
    filename : 'templates.js',
    options : {
        module : 'mmdb.toolbar.templates',
        standalone : true,
        moduleSystem : 'IIFE'
    }
};

var dest = {
    js : {
        path : 'dist',
        filename : 'bundle.js'
    },
    styles : {
        path : 'dist',
        filename : 'bundle.css'
    }
};

gulp.task( 'bower', function() {
    return bower().pipe( gulp.dest( 'bower_components' ) )
} );

gulp.task( 'templates', [ 'bower' ], function() {
    return gulp.src( html.src ).pipe( debug( {
        title : 'html:'
    } ) ).pipe( templates( templateCache.filename, templateCache.options ) ).pipe( gulp.dest( templateCache.path ) );
} );

gulp.task( 'js-bundle', [ 'templates' ], function() {
    return gulp.src( _.flatten( [ js.lib, js.src ] ) ).pipe( debug( {
        title : 'javascript:'
    } ) )
    // .pipe( sourcemaps.init() )
    .pipe( concat( dest.js.filename ) )
    // .pipe( sourcemaps.write( dest.maps.path ) )
    .pipe( gulp.dest( dest.js.path ) );
} );

gulp.task( 'js', [ 'js-bundle' ], function() {
    return del( templateCache.path );
} );

gulp.task( 'css', function() {
    gulp.src( _.flatten( [ styles.lib, styles.src ] ) ).pipe( debug( {
        title : 'styles:'
    } ) )
    // .pipe( sourcemaps.init() )
    .pipe( concat( dest.styles.filename ) )
    // .pipe( sourcemaps.write( dest.maps.path ) )
    .pipe( gulp.dest( dest.styles.path ) );
} );

gulp.task( 'default', [ 'css', 'js' ] );
