const packageJson = require("./package.json");
const docGenTypescript = require('react-docgen-typescript');

module.exports = {
    title: "React Semantic Components",
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
    exampleMode: "expand",
    components: 'src/**/*.tsx',
    sections: [
        {
            name: "Conditional",
            content: "src/conditional/section.md",
            components: "src/conditional/*.tsx",
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
            content: "src/error-handler/section.md",
            components: "src/error-handler/*.tsx",
        },
    ],
};
