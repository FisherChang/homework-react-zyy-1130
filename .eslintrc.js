module.exports = {
    env: {
        browser: true,
        es2021: true,
        node:true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        'react','react-hooks',
    ],
    rules: {
        'react/prop-types': 0,
        'react/destructuring-assignment': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    ignorePatterns: ['node_modules/*', 'dist/*', '*.scss', '*.json', 'cypress/*'],
    overrides: [
        {
            files: [
                '**/*.test.js',
                '**/*.test.jsx',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
