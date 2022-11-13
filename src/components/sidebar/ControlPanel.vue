<template>

    <aside class="divide-y">
        <ImageLoader />
        <FiltersPanel />
    </aside>

</template>

<script>
import ImageLoader from '@/components/sidebar/loader/ImageLoader';
import FiltersPanel from '@/components/sidebar/filter/FiltersPanel';
export default {
    name: 'ControlPanel',
    components: {
        ImageLoader,
        FiltersPanel,
    }
}
</script>

<style>

</style>