const withLess = require('@zeit/next-less');
const withPlugins = require('next-compose-plugins');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanCss = require('clean-css');

const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    publicPath: '/_next/static/',
                    outputPath: 'static/',
                    name: '[name].[ext]',
                },
            },
        });
        config.plugins.push(
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: CleanCss,
                cssProcessorOptions: {
                    sourceMap: true,
                },
                canPrint: true,
            })
        );
        return config;
    },
};

const plugins = [withLess];
module.exports = withPlugins(plugins, nextConfig);
