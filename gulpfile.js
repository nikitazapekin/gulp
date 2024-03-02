import gulp from "gulp"
import {path} from "./gulp/config/path.js"


global.app ={
    path: path,
    gulp: gulp,

}


import { copy } from "./gulp/tasks/copy.js"
import {reset} from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/config/plugins.js"
//import { server } from "./gulp/tasks/server.js"
//import { server } from "./gulp/config/plugins.js"
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
}
const mainTasks = gulp.parallel(copy, html )

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher,  server))
gulp.task('default', dev)

//npm i gulp-cli -g
//npm i gulp -D
//npm i -D del
//gulp  - сборка
// npm i -D gulp-file-include
// npm i -D gulp-file-include
//npm i gulp-webp-html-nosvg
//npm i -D gulp-version-number
// npm i -D plumber
// npm i -D gulp-notify
// npm i -D gulp-plumber
//npm i -D gulp-replace
//npm i -D browser-sync