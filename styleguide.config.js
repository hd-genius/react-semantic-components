const packageJson = require("./package.json");
const docGenTypescript = require('react-docgen-typescript');

module.exports = {
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
    components: 'src/**/*.tsx',
    sections: [
        {
            name: "Conditional",
            components: "src/if/*.tsx"
        },
        {
            name: "Iteration",
            components: "src/for-each/*.tsx"
        },
        {
            name: "Switch",
            components: "src/switch/*.tsx"
        },
        {
            name: "Error Handling",
            components: "src/try-catch/*.tsx"
        }
    ],
};
