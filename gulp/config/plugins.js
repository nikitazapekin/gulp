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