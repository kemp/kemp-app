const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/app.js', 'dist/').vue()
    .sass('src/css/app.scss', 'css/')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .copy('src/*.html', 'dist/')
    .copy('src/pics/', 'dist/pics')
    .copy('src/fonts/', 'dist/fonts')
    .copy('src/icons/', 'dist/icons')
    .copy('src/icons/favicon.png', 'dist/')
    .setPublicPath('dist')
    .disableSuccessNotifications()
