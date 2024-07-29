const path = require('path');

module.exports = {
    watch: true,
    mode: "development",
    devtool: 'source-map',
    entry: { 
        bundle: path.resolve(__dirname, 'app/static/js/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'app/static/dist'),
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
            {
                test: /\.css$/i,
                use: [
                    'style-loader', // Injecte le CSS dans le DOM
                    'css-loader',   // Permet l'import de fichiers CSS
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
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
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
};
