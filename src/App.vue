<template>
  <Navbar />
  <main class="h-screen flex divide-x-2">
    <Sidebar class="w-1/3 h-full bg-red-300" />
    <ImageContainer class="w-2/3 h-full bg-red-300" />
  </main>
</template>

<script>
import Navbar from '@/components/header/Navbar';
import Sidebar from './components/sidebar/Sidebar.vue';
import ImageContainer from './components/container/ImageContainer';
export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    ImageContainer,
  }
}
</script>

<style>

</style>