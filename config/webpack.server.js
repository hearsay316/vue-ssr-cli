let base = require('./webpack.base');
let merger = require("webpack-merge");
let htmlWebpckPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = merger(base,{
    entry:{
        server:path.resolve(__dirname, '../src/server-entry.js')
    },
    output:{
        libraryTarget:"commonjs2"
    },
    plugins:[
        new htmlWebpckPlugin({
            filename:'index.srr.html',
            template:path.resolve(__dirname,'../public/index.srr.html')
        })
    ]
});