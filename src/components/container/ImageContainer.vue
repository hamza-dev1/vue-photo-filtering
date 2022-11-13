<template>
    <section class="flex justify-center items-center">
        <ImageItem />
    </section>
</template>

<script>

import { onMounted, ref } from 'vue';
import ImageItem from '@/components/container/ImageItem'

export default {
    name: 'ImageContainer',
    components: {
        ImageItem
    },
    setup(props, context) {
        const imageSrc = ref('');
        
        return {
            imageSrc,
        }
    }
}

</script>

<style>

</style>