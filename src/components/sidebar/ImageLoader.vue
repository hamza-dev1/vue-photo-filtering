<template>
  <div class="mb-6 p-5">
    <label
      for="image"
      class="block mb-2 text-2xl font-medium text-white"
      >Your image link</label
    >
    <input
      type="text"
      id="image"
      @change="setImageSource"
      v-model="imageSrc"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="image"
      required
    />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ImageLoader',
  setup(props, context) {

    const imageSrc = ref('');

    return {
      imageSrc,
    }
  }
};
</script>

<style></style>
