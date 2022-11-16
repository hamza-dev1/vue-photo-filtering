import { createStore } from 'vuex'
import filterModule from '@/store/modules/filter.module'
import imageModule from '@/store/modules/image.module'

export default createStore({
    state: {
        filterState: filterModule.state,
        imageState: imageModule.state,
    },
    getters: {
        getFilterState: (state) => {
            return state.filterState;
        },
        getImageState: (state) => {
            return state.imageState;
        }
    },
    mutations: {},
    actions: {},
    modules: {
        filterModule,
        imageModule
    }
})