<template>
  <Layout>
    <p>2021 年 4 月 17 日</p>
    <div class="cellWrapper">
      <cell class="contentCell" />
      <ul>
        <li class="select"></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import Cell from '../components/Cell.vue'
import Layout from '../components/Layout.vue'
export default {
  components: { Layout, Cell },
  name: 'Time'
}
</script>

<style lang="scss" scoped>
p {
  margin-top: 40px;
  padding: 20px;
  font-size: 18px;
}
.cellWrapper {
  margin: auto;
  ul {
    display: flex;
    position: relative;
    justify-content: center;
    padding-top: 20px;
    li {
      width: 8px;
      height: 8px;
      background: lightgray;
      border-radius: 50%;
      margin: 0 4px;
      &.select {
        background: black;
      }
    }
  }
}
</style>
