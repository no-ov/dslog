import ts from '@rollup/plugin-typescript'

export default {
  input: './src/core/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'dslog'
    }
  ],
  plugins: [ts()]
}
