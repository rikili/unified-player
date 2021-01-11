module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/prop-types': 1,
        indent: ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'import/prefer-default-export': 0,
        'no-param-reassign': 0,
        'arrow-body-style': 0,
        'object-curly-newline': 0,
        'react/jsx-filename-extension': 0,
        'linebreak-style': 0,
    },
};
