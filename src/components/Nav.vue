<template>
  <ul>
    <router-link active-class="selected" to="/home">首页</router-link>
    <router-link active-class="selected" to="/time">年月日</router-link>
  </ul>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-around;
  background-color: rgb(227, 227, 227);
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    bottom: 0;
    transform: scale(0.5);
    transform-origin: bottom;
    z-index: -1;
    position: absolute;
    border-top: 1px solid rgb(180, 180, 180);
  }
  a {
    padding: 12px;
    width: 50%;
    text-align: center;
    &.selected {
      color: #f90;
    }
  }
}
</style>
