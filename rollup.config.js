import sass from 'rollup-plugin-sass'

import pkg from './package.json'
import jsx from 'acorn-jsx';

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
      sass({ insert: true }),
    ],
    external: ['react', 'react-dom']
}