// entry -> output
// Documentation: https://webpack.js.org/ and https://webpack.js.org/concepts/modules/

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),   // Setting 'bundle.js' location to the current directory, in the 'public' folder
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',     // Convert with Babel all the files with extension '.js'
            test: /\.js$/,              // Target all files that end in '.js'
            exclude: /node_modules/     // Excludes node_modules from converting with Babel
        }, {
            test: /\.s?css$/,           // Target all files that end in '.scss'
            use: [
                'style-loader',         // Takes the CSS that is in JS and adds it to the DOM by injecting a style tag; that will get our styles showing up in the browser
                'css-loader',           // Allows Webpack to load in our CSS assets (loads CSS and converts it to a JS representation of that CSS
                'sass-loader'           // Converts '.scss' files to '.css' files (uses node-sass to convert de file)
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', // Source maps that helps debug easier, watching the source files
    devServer: { // node-sass 4.5.3 not used
        contentBase: path.join(__dirname, 'public')    // Configuration for Webpack dev server public files location
    }
};
