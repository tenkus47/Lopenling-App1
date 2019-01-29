module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false
            }
        ],
        "@babel/preset-react",
        "@babel/preset-flow"
    ],
    plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "lodash",
        "@babel/plugin-syntax-dynamic-import"
    ],
    env: {
        test: {
            plugins: [
                "@babel/plugin-transform-modules-commonjs",
                "@babel/plugin-proposal-object-rest-spread"
            ],
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: false
                    }
                ],
                "@babel/preset-react",
                "@babel/preset-flow"
            ]
        }
    }
};
