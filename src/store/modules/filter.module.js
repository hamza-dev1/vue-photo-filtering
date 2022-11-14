export default {
    namespaced: true,
    state: {
        imageSource: ""
    },
    mutations: {
        SET_IMAGE_SOURCE: (state, payload) => {
            state.imageSource = payload.value;
        }
    },
    actions: {
        setImageSource: ({ commit }, payload) => {
            return commit('SET_IMAGE_SOURCE', payload);
        }
    }
}