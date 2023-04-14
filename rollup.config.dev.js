import pkg from './package.json' assert { type: 'json' }

const footer = `
if(typeof window !== 'undefined') {
  window._VERSION_ = '${pkg.version}'
}`

import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
// import {eslint} from "rollup-plugin-eslint";

export default {
    input: "src/main.ts",
    output: [
        // {
        //     file: pkg.main,
        //     format: 'cjs',
        //     footer,
        // },
        // {
        //     file: pkg.module,
        //     format: 'esm',
        //     footer,
        // },
        {
            file: pkg.browser,
            format: 'umd',
            name: 'template',
            footer,
            sourcemap:true
        }],
    plugins:[
        typescript(
            {tsconfig: 'tsconfig.json'}
        ),
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude:'node_modules/**'
        }),
        // dev server
        livereload(),
        serve({
            open:true,
            port:8805,
            // 静态资源
            contentBase: [''],
        }),

    ]
};
