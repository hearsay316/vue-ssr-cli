import Vue from "vue"
import App from "./App.vue"
// 创建实例的函数
export default ()=>{
    let app = new Vue({
        el:"#app",
        render:(h)=>h(App)
    });
    console.log({app},6666);
    return {app};
}
