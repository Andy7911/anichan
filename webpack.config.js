const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');


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
 
   resolve: {
       alias: {
           'react': 'preact/compat',
           'react-dom/test-utils': 'preact/test-utils',
           'react-dom': 'preact/compat',
           'react/jsx-runtime': 'preact/jsx-runtime',
           'react-dom/test-utils': 'preact/test-utils'
       }
   },
   module: {
       rules: [
           {
               test: /\.(png|jpg|gif|svg|webp)$/,
               use: [
                 {
                   loader: 'file-loader',
                   options: {
                     name: '[name].[ext]',
                   
                     publicPath: '/static/img/icon'
                   },
                 },
               ],
             },
          
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-env',['@babel/preset-react', {
                           pragma: 'h', // ajoutez ceci pour Preact
                           pragmaFrag: 'Fragment', // ajoutez ceci pour le support de Fragment
                       }] ]
                   }
               }
           },
           {
            test: /\.css$/,
            use: [
                'style-loader',  // Injecte le CSS dans le DOM
                'css-loader',    // Interprète @import et url() comme des importations
            ],
        },
           {
               test: /\.s[ac]ss$/i,
               use: [
                   'style-loader', // Injecte le CSS dans le DOM
                   'css-loader',   // Permet l'import de fichiers CSS dans vos fichiers Sass
                   'sass-loader',  // Compile Sass en CSS
                  
               ],
           },
       ],
   },
   plugins: [
      
       new HotModuleReplacementPlugin(),
     ],
     devServer: {
       contentBase: path.join(__dirname, 'app/static/dist'),
       compress: true,
       port: 5000,
       hot: true
     }
};

