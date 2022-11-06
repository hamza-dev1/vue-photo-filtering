<template>
  <Navbar />
  <main class="h-screen flex divide-x-2">
    <ControlPanel class="w-1/6 h-full bg-red-300" />
    <ImageContainer class="w-5/6 h-full bg-red-300" />
  </main>
</template>

<script>
import Navbar from '@/components/header/Navbar';
import ControlPanel from './components/sidebar/ControlPanel';
import ImageContainer from './components/container/ImageContainer';
export default {
  name: 'App',
  components: {
    Navbar,
    ControlPanel,
    ImageContainer,
  }
}
</script>

<style>

</style>