module.exports = {
    mode: 'development',
    entry: './src/scripts/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        static: './',
        open: true,
        hot: true, // не работает
        port: 8080,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
};
