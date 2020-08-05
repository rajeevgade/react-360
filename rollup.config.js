import pkg from './package.json'
import jsx from 'acorn-jsx';

import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/React360Viewer.js',
    output: [
      {
        file: pkg.main,
        exports: 'named',
        sourcemap: true,
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
    ],
    external: ['react', 'react-dom']
}