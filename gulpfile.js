var elixir = require('laravel-elixir');

var paths = {
    js: './resources/assets/js/',
    css: './resources/assets/css/'



};

elixir(function(mix) {
    mix.styles([paths.css + 'style.css'], './public/css/app.css')
        .scripts([paths.js + 'init.js'], './public/js/app.js')
});