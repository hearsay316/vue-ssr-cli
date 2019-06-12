let express = require("express");
let app = express();
let Vue = require("vue");
let fs = require("fs");
let path = require('path');
let vueServerRenderer = require("vue-server-renderer");
let serverBundle = fs.readFileSync('./dist/server.bundle.js','utf-8');
let template = fs.readFileSync('./dist/index.srr.html','utf-8');
let render = vueServerRenderer.createBundleRenderer(serverBundle,{
    template
});
console.log(render);
app.get("/",(req,res)=>{
    render.renderToString((err,html)=>{
        console.log(err);
        console.log();
        res.send(html);
    });

});
app.use(express.static(path.resolve(__dirname,'dist')));
app.listen(4000);