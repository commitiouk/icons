import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default ['esm', 'cjs'].map((format = '') => ({
  input: 'src/index.ts',
  output: {
    ...(format === 'esm' && { dir: 'dist/esm' }),
    ...(format === 'cjs' && { dir: 'dist/cjs' }),
    format,
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({
      compilerOptions: {
        declarationDir: format === 'esm' ? 'dist/esm' : 'dist/cjs',
        outDir: format === 'esm' ? 'dist/esm' : 'dist/cjs',
      },
    }),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    filesize(),
  ].concat(format === 'cjs' ? commonjs() : []),
}));
