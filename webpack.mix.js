let mix = require('laravel-mix');
require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.js('src/app.js', 'dist/')
    .sass('src/css/app.scss', 'dist/css')
    .copy('src/*.html', 'dist/')
    .copy('src/pics/', 'dist/pics')
    .copy('src/fonts/', 'dist/fonts')
    .copy('src/icons/', 'dist/icons')
    .copy('src/icons/favicon.png', 'dist/')
    .setPublicPath('dist')
    .disableSuccessNotifications()
    .tailwind()
    .purgeCss({
        extend: {
            content: [
                path.join(__dirname, "src/index.html"),
                path.join(__dirname, "src/components/**/*.vue")
            ],
        }
    });
