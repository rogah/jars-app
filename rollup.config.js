import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'app/index.js',
    output: {
        file: 'dist/app.js',
        format: 'umd',
        name: 'Jars',
        sourcemap: 'inline',
    },
    plugins: [
        resolve(),
    ],
    external: ['lodash'],
};
