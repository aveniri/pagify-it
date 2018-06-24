import babel from 'rollup-plugin-babel';

export default {
  external: ['react', 'page', 'prop-types'],
  input: 'src/index.js',
  output: { file: 'lib/index.js', format: 'cjs', exports: 'named' },
  plugins: [
    babel({
      presets: [['es2015', { modules: false }], 'react', 'stage-0'],
      plugins: ['external-helpers'],
      comments: false,
      babelrc: false
    })
  ]
};
