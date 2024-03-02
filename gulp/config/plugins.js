import replace from "gulp-replace";
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import browsersync from "browser-sync";
//import app from "../../gulpfile"
export const plugins ={
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync
}



import fileinclude from "gulp-file-include"
import gulpWebpHtmlNosvg from "gulp-webp-html-nosvg"
import versionNumber from "gulp-version-number"
export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(fileinclude())
    .pipe(gulpWebpHtmlNosvg())
    .pipe(versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_v',
            'cover': 0,
            'to': [
                'css',
                'js',
            ]

        },
        'output': {
            'file': 'gulp/version.json'
        }
    }))
    .pipe(app.gulp.dest(app.path.build.html))
   .pipe(plugins.browsersync.stream())
 
}



import dartSass from "sass"
import gulpSass from "gulp-sass"
import rename from "gulp-rename"
const sass = gulpSass(dartSass)
export const scss = () => {


    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
    .pipe(sass({
        outputStyle: 'expanded'
    }))

    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(plugins.browsersync.stream())
}

export const server = (done) => {
    plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        port: 3000,
    });
    done();
}
 

/*
export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        port: 3000,
    });
    done();
}; */