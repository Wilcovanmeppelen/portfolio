var gulp = require("gulp");
var less = require("gulp-less");
var watch = require("gulp-watch"); //+

gulp.task("less", function() {
  watch("less/**/*.less", function(){ //+
    gulp.src("bower_components/bootstrap/less/main.less")
       .pipe(less())
       .pipe(gulp.dest("css"));
  }); //+
});
