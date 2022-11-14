<template>
    <section class="flex justify-center items-center">
    <img 
        :src="imageSrc"
        alt="No image loaded!" 
        class="image">

    </section>
</template>

<script>

import { ref, watch } from 'vue';
import { useStore } from "vuex";

export default {
    // src="../../assets/images/logo.png" 
    name: 'ImageContainer',
    components: {
    },
    setup() {
        const store = useStore();
        const imageSrc = ref('');

        watch(store.getters.getFilterState, () => {
            imageSrc.value = 
                store.getters.getFilterState.imageSource
        });

        return {
            imageSrc,
        }
    }
}

</script>

<style lang="postcss" scoped>
.image {
    filter: 
        brightness(var(--brightness))
        hue-rotate(var(--hue-rotate))
        grayscale(var(--grayscale))
        contrast(var(--contrast))
        saturate(var(--saturate))
        invert(var(--invert))
        sepia(var(--sepia))
}

</style>