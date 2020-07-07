import Vue from 'vue';
import Vuex from 'vuex';

import Products from './products';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        template: {
            isVisibleNavLogo: false,
        },
    },
    getters: {
        isVisibleNavLogo(state) {
            return state.template.isVisibleNavLogo;
        },
    },
    mutations: {
        CHANGE_NAV_LOGO(state, payload) {
            state.template.isVisibleNavLogo = payload;
        },
    },
    actions: {},
    modules: {
        Products,
    },
});
