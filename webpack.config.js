const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        home: './src/home',
        about: './src/about',
        contact: './src/contact',
        games: './src/games',
        projects: './src/projects',
        breakout: './src/games/breakout'
    },
    output: {
        filename: '[name]/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.scss'],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name]/main.css" })
    ]
}     