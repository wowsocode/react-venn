let path = require('path'),
    webpack = require('webpack'),
    analyze = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: './src/client/index',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.min.js'
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [

            {
                test: /\.jsx?$/,
                sideEffects: false,
                include: [
                    path.resolve(__dirname, 'src/client/')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ 'react', 'env' ],
                            plugins: ['transform-object-rest-spread', 'transform-class-properties']
                        }
                    }
                ],
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src/client/js/')
        ],
        extensions: [
            '.js',
            '.json',
            '.jsx'
        ]
    },
    mode: 'production',
    plugins: [
        new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
        // new analyze()
    ]
}
