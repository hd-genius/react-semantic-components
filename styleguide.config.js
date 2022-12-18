const packageJson = require("./package.json");

module.exports = {
    components: 'src/**/*.tsx',
    version: packageJson.version,
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
