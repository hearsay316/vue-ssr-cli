let htmlWebpackPlugin = require('html-webpack-plugin');
let merge = require('webpack-merge');
let base = require("./webpack.base");
let path = require('path');
module.exports = merge(base,{
    entry: {
        client:path.resolve(__dirname, '../src/client-entry.js')
    },
    plugins: [
        new htmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'../public/index.html')
        })
    ]
});