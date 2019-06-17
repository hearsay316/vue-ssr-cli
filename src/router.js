import Vue from 'vue';
import VueRouter from 'vue-router';
import Bar from "./components/Bal.vue";
import Foo from "./components/Foo.vue"
import vueMeta from 'vue-meta'
Vue.use(VueRouter);
Vue.use(vueMeta);
export default ()=>{
    return new VueRouter({
        mode:'history',
        routes:[
            {path:'/',component:Bar},
            {path:'/foo',component:()=>import("./components/Foo.vue")}
        ]
    });
}