const packageJson = require("./package.json");
const docGenTypescript = require('react-docgen-typescript');

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
    },
    propsParser: docGenTypescript.withCustomConfig(
        './tsconfig.json'
    ).parse,
};
