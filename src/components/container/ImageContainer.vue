<template>
  <section class="">
    <SubNavBar />
    <div class="flex justify-center items-center">
      <img
        :src="imageSrc"
        alt="No image loaded!"
        class="image w-full h-full object-contain"
      />
    </div>
  </section>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import SubNavBar from "../header/SubNavBar";

export default {
  name: "ImageContainer",
  components: {
    SubNavBar,
  },
  setup() {
    const store = useStore();
    const imageSrc = ref("");
    
    watch(store.getters.getImageState, () => {
      imageSrc.value = store.getters.getImageState.image.source;
    });

    return {
      imageSrc,
    };
  },
};
</script>

<style lang="postcss" scoped>
.image {
  filter: brightness(var(--brightness)) hue-rotate(var(--hue-rotate))
    grayscale(var(--grayscale)) contrast(var(--contrast))
    saturate(var(--saturate)) invert(var(--invert)) sepia(var(--sepia));
}
</style>
