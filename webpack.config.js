const path = require('path');
module.exports = {
    watch: true,
    mode:"development",
    entry: { 
        bundle:path.resolve(__dirname,'app/static/js/main.js'),
},
    output: {
      
        path:  path.resolve(__dirname,'app/static/dist'), 
        filename: '[name].js',
    }, 
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', // Injecte le CSS dans le DOM
                    'css-loader',   // Permet l'import de fichiers CSS dans vos fichiers Sass
                    'sass-loader',  // Compile Sass en CSS
                ],
            },
        ],
    }
};