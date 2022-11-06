<template>

    <aside class="divide-y">
        <ImageLoader />
        <FilterOptions />
    </aside>

</template>

<script>
import ImageLoader from '@/components/sidebar/ImageLoader';
import FilterOptions from '@/components/sidebar/FilterOptions';
export default {
    name: 'ControlPanel',
    components: {
        ImageLoader,
        FilterOptions,
    }
}
</script>

<style>

</style>