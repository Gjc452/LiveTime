<template>
  <layout>
    <p class="month">中国现阶段人均寿命 900 个月</p>
    <button>点击设置出生年月，查看人生进度</button>
    <Cell />
    <p class="maxim">赚钱之道很多，但是找不到赚钱的种子，便成不了事业家</p>
  </layout>
</template>

<script>
import Cell from '../components/Cell.vue'
import Layout from '../components/Layout.vue'
export default {
  components: { Layout, Cell },
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.month {
  margin-top: 40px;
  padding: 20px 0;
  font-size: 18px;
}
button {
  background: transparent;
  border: 1px solid black;
  padding: 8px;
  border-radius: 2px;
}
.maxim {
  font-size: 14px;
}
</style>
