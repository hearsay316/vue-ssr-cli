let base = require('./webpack.base');
let merger = require("webpack-merge");
let htmlWebpackPlugin = require('html-webpack-plugin');
let VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
let path = require('path');
let externals = require('webpack-node-externals');

module.exports = merger(base,{
    target:'node',
    entry:{
        server:path.resolve(__dirname, '../src/server-entry.js')
    },
    externals:[externals()], // 第三方模块不要打包,node 默认打包不需要打包node第三方库 require()
    output:{
        libraryTarget:"commonjs2"
    },
    plugins:[
        new VueSSRServerPlugin(),
        new htmlWebpackPlugin({
            filename:'index.srr.html',
            template:path.resolve(__dirname,'../public/index.srr.html'),
            excludeChunks: ['server']
        })
    ]
});