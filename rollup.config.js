import babel from 'rollup-plugin-babel';
import pkg from './package.json'
import jsx from 'acorn-jsx';

import postcss from 'rollup-plugin-postcss';

export default {
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
            extensions: [ '.css' ],
        }),
        babel()
    ],
    external: ['react', 'react-dom']
}