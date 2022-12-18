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
            content: "src/if/section.md",
            components: "src/if/*.tsx",
        },
        {
            name: "Iteration",
            content: "src/for-each/section.md",
            components: "src/for-each/*.tsx",
        },
        {
            name: "Switch",
            content: "src/switch/section.md",
            components: "src/switch/*.tsx",
        },
        {
            name: "Error Handling",
            content: "src/try-catch/section.md",
            components: "src/try-catch/*.tsx",
        }
    ],
};
