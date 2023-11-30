const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// function for compileing our SASS into CSS
function buildStyles() {
    return src("ritta/**/*.scss").pipe(sass()).pipe(dest("css")); // output in a css folder
    // .pipe(purgecss({content:['*.html']}))
}

// watch function that will actively watch our source SASS file and then when we make changes to that file and save them it's going to automatically runs the buildStyles function for us so that everytime we make a change to our SASS file oyur CSS is going to be updated and processed automatically to stay in sync with it
function watchTask() {
    watch(["ritta/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
