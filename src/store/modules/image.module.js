import { FiltersService } from "@/services/FiltersService";

export default {
    namespaced: true,
    state: {
        image: FiltersService.getImage()
    },
    getters: {
        
    },
    mutations: {
        SET_IMAGE_SOURCE: (state, payload) => {
            state.image.source = payload.value;
        },
        SET_IMAGE_DIMENSIONS(state, payload) {
            state.image.width = payload.width; 
            state.image.height = payload.height;
        }
    },
    actions: {
        setImageSource: ({ commit }, payload) => {
            return commit('SET_IMAGE_SOURCE', payload);
        },
        setImageDimensions: ({ commit }, payload) => {
            return commit('SET_IMAGE_DIMENSIONS', payload);
        }
    }
}