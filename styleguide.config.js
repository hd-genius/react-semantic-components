module.exports = {
    components: 'src/**/*.tsx',
    webpackConfig: {
        module: {
            rules: [
                // Babel loader will use your project’s babel.config.js
                {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                },
            ]
        }
    }
};
