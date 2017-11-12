// Webpack Config
const
    webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: 'app.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        filename: "app.js",
        publicPath: "/assets/",
        port: 3000,
        historyApiFallback: true,
        watchOptions: {
            ignored: /node_modules/
        },
        stats: { colors: true }
    },
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.scss'],
	},
    plugins: [
        new ExtractTextPlugin("app.css"),
    ],
    module: {
        loaders: [
            {   test: /\.(js|jsx)$/,
                loader: 'babel-loader', 
                exclude: /node_modules/
            },
            {   test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: "css-loader" },
                        { loader: "sass-loader" }
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    }
}