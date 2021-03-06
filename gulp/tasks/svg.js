module.exports = function() {
    $.gulp.task('svg', () => {
        return $.gulp.src('./dev/static/img/svg/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: "sprite.svg"
                    }
                }
            }))
            .pipe($.gulp.dest('./build/app/img/svg/'));
    });
};
