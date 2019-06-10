let express = require("express");
let app = express();
let Vue = require("vue");
let fs = require("fs");
let vueServerRenderer = require("vue-server-renderer");
let vm = new Vue({
    template:`<div>111111</div>`
});
let template = fs.readFileSync("./index.html",'utf-8');
console.log(template);
let render = vueServerRenderer.createRenderer({
    template
});
app.get("/",(req,res)=>{
    render.renderToString(vm,function (err,html) {
        res.send(
            html
        )
    })
});
app.listen(3000);