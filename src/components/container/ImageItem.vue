<template>
    <img 
        src="../../assets/images/logo.png" 
        alt="No image loaded!" 
        class="image">
</template>

<script>
export default {

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