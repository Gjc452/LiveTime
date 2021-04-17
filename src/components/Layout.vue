<template>
  <div class="wrapper">
    <div class="content">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from './Nav.vue'
export default {
  components: { Nav },
  name: 'Layout'
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
