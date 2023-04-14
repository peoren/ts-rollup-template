import pkg from './package.json' assert { type: 'json' }
const footer = `
if(typeof window !== 'undefined') {
  window._VERSION_ = '${pkg.version}'
}`
import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs";
// import {eslint} from "rollup-plugin-eslint";

export default {
    input: "src/main.ts",
    output: [{
        file: pkg.main,
        format: 'cjs',
        footer,
    },
    {
        file: pkg.module,
        format: 'esm',
        footer,
    },
    {
        file: pkg.browser,
        format: 'umd',
        name: 'template',
        footer,
    }],
    plugins:[
        // lint file
        // eslint({
        //     throwOnError: true, // lint 结果有错误将会抛出异常
        //     throwOnWarning: true,
        //     include: ['src/**/*.ts'],
        //     exclude: ['node_modules/**', 'lib/**', '*.js'],
        // }),
        // compile typescript to javascript
        typescript(
            {tsconfig: 'tsconfig.json'}
        ),
        // resolve node_modules packages
        resolve(),
        // convert commonjs to es6
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude:'node_modules/**'
        })

    ]
};
