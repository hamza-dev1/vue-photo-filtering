<template>
  <div class="my-5">
    <label
      :for="filter.name"
      class="block mb-2 text-sm font-medium text-white"
      >{{ filter.name }}</label
    >
    <input
      v-model="filter.value"
      @change="filterValueUpdated"
      @input="filterValueUpdated"
      :min="filter.min"
      :max="filter.max"
      :id="filter.name"
      type="range"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />
  </div>
</template>

<script>
export default {
    name: 'FilterOption',
    props: ['filter', ],
    setup(props) {
        const filterValueUpdated = () => {
          document.documentElement.style.setProperty(`--${props.filter.name}`, `${props.filter.value}${props.filter.unit}`);
          //console.log(`--${props.filter.name}`, `${props.filter.value}${props.filter.unit}`);
        }

        return {
            filterValueUpdated
        }
    }
};
</script>

<style></style>
