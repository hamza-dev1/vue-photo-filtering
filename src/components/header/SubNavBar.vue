<template>
  <div class="pb-5">
    <nav
      class="bg-gray-500 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-700" >
      <div class="container flex flex-wrap justify-between items-center mx-auto" >
        <div href="#" class="flex flex-col">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Image Dimension</span>
            <div class="font-bold text-white">
              <span class="mx-2">Width: {{ dimensions.width }}</span>
              <span class="mx-2">Height: {{ dimensions.height }}</span>
            </div>
        </div>
        <div 
          class="w-full md:block md:w-auto"
          id="navbar-default" >
          <ul
            class="flex flex-col mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" >
            <li>
                <a href="https://github.com/hamza-dev1"
                    target="_blank"
                    class="p-4 block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page">
                    Download
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import { reactive, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "SubNavBar",
  setup() {
    const store = useStore();
    const dimensions = reactive({
        width: 0,
        height: 0,
    });
    
    watchEffect(() => {
        dimensions.width = store.getters.getImageState.image.width;
        dimensions.height = store.getters.getImageState.image.height;
    });

    return {
        dimensions
    }
  }
};
</script>

<style></style>
