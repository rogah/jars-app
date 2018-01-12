import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/app.js',
    output: {
        file: 'dist/app.js',
        format: 'umd',
        name: 'Jars',
        sourcemap: 'inline',
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
        }),
    ],
    external: ['lodash'],
};
