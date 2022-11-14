import { createStore } from 'vuex';
import filterModule from '@/store/modules/filter.module'

export default createStore({
    state: {
        filterState: filterModule.state
    },
    getters: {
        getFilterState: (state) => {
            return state.filterState;
        },
    },
    mutations: {},
    actions: {},
    modules: {
        filterModule
    }
})