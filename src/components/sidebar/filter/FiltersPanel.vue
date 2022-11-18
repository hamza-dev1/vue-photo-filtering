<template>
    <div class="p-5">
        <h1 class="text-2xl text-black mb-4">
            Available Filters
        </h1>
        <FilterOption 
            v-for="(filter, i) in filters" 
            :key="i"
            :filter="filter" />
    </div>
</template>

<script>

import { ref } from 'vue';
import FilterOption from './FilterOption';
import { FiltersService } from '@/services/FiltersService';

export default {
    name: 'FiltersPanel',
    components: {
        FilterOption
    },
    setup() {
        const filters = ref([
            ...FiltersService.getAllFilters()
        ]);
        
        return {
            filters
        }
    }
}
</script>

<style>

</style>