const mix = require('laravel-mix');

mix.js('src/app.js', 'dist/').vue()
    .sass('src/css/app.scss', 'css/')
    .options({
        postCss: [ require('tailwindcss') ],
    })
    .copy('src/*.html', 'dist/')
    .copy('src/pics/', 'dist/pics')
    .copy('src/fonts/', 'dist/fonts')
    .copy('src/icons/', 'dist/icons')
    .copy('src/icons/favicon.png', 'dist/')
    .setPublicPath('dist')
    .disableSuccessNotifications()
