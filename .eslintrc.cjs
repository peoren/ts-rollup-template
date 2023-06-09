// .eslintrc.js
const eslintrc = {
    parser: '@typescript-eslint/parser', // 使用 ts 解析器
    extends: [
        'eslint:recommended', // eslint 推荐规则
        'plugin:@typescript-eslint/recommended', // ts 推荐规则
        "prettier"
    ],
    plugins: [
        '@typescript-eslint',
        'prettier'
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {}, // 自定义
}

module.exports = eslintrc
