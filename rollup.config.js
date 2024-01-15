import ts from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { babel } from '@rollup/plugin-babel';
import terser from "@rollup/plugin-terser";
import del from 'rollup-plugin-delete';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default [
  {
    input: './src/core/index.ts',
    output: [
      {
        file: 'dist/dslog.esm.js',
        format: 'esm'
      },
      {
        file: 'dist/dslog.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/dslog.umd.js',
        format: 'umd',
        name: 'dslog'
      }
    ],
    plugins: [
      // del({ targets: 'dist/*' }),
      ts(),
      babel({
        extensions,
        presets: [
          '@babel/preset-env',
          ["@babel/preset-typescript", {
            "isTSX": true,
            "allExtensions": true,
          }]
        ],
        babelHelpers: 'bundled',
      }),
      terser()
    ]
  },
  {
    input: './src/core/index.ts',
    output: [{ file: 'dist/dslog.d.ts', format: 'es' }],
    plugins: [dts()]
  }
]
