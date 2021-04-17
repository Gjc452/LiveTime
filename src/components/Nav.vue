<template>
  <ul>
    <router-link to="/">首页</router-link>
    <router-link to="/time">年月日</router-link>
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
  border-top: 1px solid black;
  background-color: #aaa;
  a {
    padding: 12px;
    width: 50%;
    text-align: center;
  }
}
</style>
