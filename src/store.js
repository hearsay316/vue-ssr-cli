import Vuex from "vuex";
import Vue from "vue"

Vue.use(Vuex);

export default () => {
    let store = new Vuex.Store({
        state: {
            useranme: "jwt"
        },
        mutations: {
            set_username(state,desc) {
                state.useranme = desc
            }
        },
        actions: {
            set_username({commit},desc) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit("set_username",desc);
                        resolve();
                    }, 1000);
                })
            }
        }
    });
    if(typeof window !=="undefined"&&window.__INITIAL_STATE__){
        store.replaceState(window.__INITIAL_STATE__);
    }
    return store;
}