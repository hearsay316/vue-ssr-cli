import Vue from 'vue';
import VueRouter from 'vue-router';
import Bar from "./components/Bal.vue";
import Foo from "./components/Foo.vue"
Vue.use(VueRouter);
export default ()=>{
    return new VueRouter({
        mode:'history',
        routes:[
            {path:'/',component:Bar},
            {path:'/foo',component:()=>import("./components/Foo.vue")}
        ]
    });
}