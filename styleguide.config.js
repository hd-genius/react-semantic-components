const packageJson = require("./package.json");
const docGenTypescript = require('react-docgen-typescript');
const path = require('path');

const capitalizeWord = word => word.charAt(0).toUpperCase() + word.substring(1);

const red = "#f46";

const white = "#d8d8d8";

const purple = "#c6d";

const gray = "#282828";

const black = "#181818";

const blue = "#5af";

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
            // general
            base: white,
            light: "#bbb",
            lightest: "#aaa",
            link: purple,
            linkHover: '#e90',
            focus: 'rgba(22, 115, 177, 0.25)',
            border: '#e8e8e8',
            name: purple,
            type: blue,
            error: '#c00',
            baseBackground: gray,
            sidebarBackground: black,
            ribbonBackground: '#e90',
            ribbonText: '#fff',
                        
            // code samples
            codeBackground: black,
            codeBase: white,
            codeComment: '#6d6d6d',
            codePunctuation: '#999',
            codeProperty: blue, // constants
            codeDeleted: '#905',
            codeString: purple, // react properties
            codeInserted: '#690',
            codeOperator: '#9a6e3a',
            codeKeyword: '#1673b1',
            codeFunction: red,
            codeVariable: '#e90',
        }
    }
};
