<template>
  <Navbar />
  <main class="h-screen flex divide-x-2">
    <ControlPanel class="w-2/6 h-full" />
    <ImageContainer class="w-4/6 h-full" />
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