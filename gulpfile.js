var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var minifycss = require("gulp-minify-css");

/*gulp.task("copyfile",function(){
	gulp.src("html/index.html").pipe(gulp.dest("dist/html"));
});*/

//拷贝所有文件
gulp.task("copyfiles",function(){
	gulp.src("**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\WangJiuWangW"));
});




//copy img文件夹下的所有文件
gulp.task("copyImgAll",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\WangJiuWangW\\img"));
});

//合并并压缩
//gulp.task("concatAndUglify",function(){
//	gulp.src(["js/index.js","js/goodsList.js"])
//	.pipe(concat("all.min.js"))
//	.pipe(uglify())
//	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\gulpPrj\\js"));
//});


//sass编译
gulp.task("sass",function(){
	gulp.src("YD/*.scss").pipe(sass()).pipe(gulp.dest("YD/css"));
});

gulp.task("sass",function(){
	gulp.src("PC/*.scss").pipe(sass()).pipe(gulp.dest("PC/css"));
});
//合并，压缩，重命名
//gulp.task("concatAndUglifyAndRename",function(){
//	gulp.src(["js/index.js","js/goodsList.js"])
//	.pipe(concat("all.js"))
//	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\gulpPrj\\js"))
//	.pipe(uglify())
//	.pipe(rename("all.min.js"))
//	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\gulpPrj\\js"));
//});


//压缩css
gulp.task("minifyCss",function(){
	gulp.src("css/*.css")
	.pipe(minifycss())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\WangJiuWangW\\css"));	
});







//自动监视
gulp.task("watchAll",function(){
	gulp.watch("**/*",["copyfiles"]);
	//	gulp.watch(["img/*.jpg"],["copyImg"]);
	gulp.watch(["PC/*.scss"],["sass"]);
	gulp.watch(["YD/*.scss"],["sass"]);
	
});

