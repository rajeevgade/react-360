import babel from 'rollup-plugin-babel';
import pkg from './package.json'
import jsx from 'acorn-jsx';

import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = {
    input: 'src/React360Viewer.js',
    output: [
      {
        file: pkg.main,
        exports: 'named',
        format: 'esm',
        strict: false
      }
    ],
    acornInjectPlugins: [
        jsx()
    ],
    plugins: [
      postcss({
        extensions: [ '.css' ]
      }),
      babel({
        exclude: "/node_modules/",
        presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "minify"
        ],
        plugins: [
            [
              "@babel/plugin-proposal-class-properties"
            ]
        ]
      }),
      nodeResolve({preventAssignment: true}),
      commonjs()
    ],
    external: ['react', 'react-dom'],
}

export default config;
