import Vue from "vue"
import App from "./App.vue"
import "./assets/css/base.css"
import createRouter from './router.js';
import createStore from './store'
// 创建实例的函数
export default ()=>{
    let router = createRouter();
    let store = createStore();
    let app = new Vue({
        el:"#app",
        router,
        store,
        render:(h)=>h(App)
    });
    return {app,router,store};
}
