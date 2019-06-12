import Vue from "vue"
import App from "./App.vue"
import "./assets/css/base.css"
import createRouter from './router.js';
// 创建实例的函数
export default ()=>{
    let router = createRouter();
    let app = new Vue({
        el:"#app",
        router,
        render:(h)=>h(App)
    });
    return {app,router};
}
