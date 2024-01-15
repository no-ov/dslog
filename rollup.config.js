import ts from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import babel from '@rollup/plugin-babel'
import del from 'rollup-plugin-delete';

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
        exclude: "node_modules/**",
        babelHelpers: 'bundled'
      }),
    ]
  },
  {
    input: './src/core/index.ts',
    output: [{ file: 'dist/dslog.d.ts', format: 'es' }],
    plugins: [dts()]
  }
]
