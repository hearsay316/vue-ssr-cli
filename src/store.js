import Vuex from "vuex";
import Vue from "vue"

Vue.use(Vuex);

export default () => {
    return new Vuex.Store({
        state: {
            useranme: "jwt"
        },
        mutations: {
            set_username(state) {
                state.useranme = "争锋"
            }
        },
        actions: {
            set_username({commit}) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit("set_username");
                        resolve();
                    }, 1000)
                })
            }
        }
    })
}