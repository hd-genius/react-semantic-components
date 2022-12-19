const packageJson = require("./package.json");
const docGenTypescript = require('react-docgen-typescript');
const path = require('path');

const capitalizeWord = word => word.charAt(0).toUpperCase() + word.substring(1);

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
    getComponentPathLine(componentPath) {
        const componentName = path.basename(componentPath, ".tsx")
            .split("-")
            .map(capitalizeWord)
            .join("");
        return `import { ${componentName} } from "react-semantic-components";`;
    },
    exampleMode: "expand",
    usageMode: "expand",
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
    theme: {
        color: {
            base: "#d8d8d8",
            light: "#bbb",
            lightest: "#aaa",
            link: "#c6d",
            baseBackground: "#334",
            sidebarBackground: "#223",
        }
    }
};
