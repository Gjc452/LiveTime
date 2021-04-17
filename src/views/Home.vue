<template>
  <layout>
    <p class="month" ref="p">中国现阶段人均寿命 900 个月</p>
    <button @click="open">点击设置出生年月，查看人生进度</button>
    <Cell :time="datetime" :number="number" />
    <p class="maxim">赚钱之道很多，但是找不到赚钱的种子，便成不了事业家</p>
    <yd-datetime
      v-show="false"
      type="month"
      :end-date="endDate"
      start-date="1949-10"
      v-model="datetime"
      ref="datetime"
    ></yd-datetime>
  </layout>
</template>

<script>
import Cell from '../components/Cell.vue'
import Layout from '../components/Layout.vue'
import dayjs from 'dayjs'
export default {
  components: { Layout, Cell },
  name: 'Home',
  data () {
    return {
      datetime: '',
      endDate: '',
      number: '100%',
      liveTime: ''
    }
  },
  created () {
    this.datetime = this.endDate = dayjs().format('YYYY-MM-DD')
  },
  methods: {
    open () {
      this.$refs.datetime.open()
    }
  },
  watch: {
    datetime: function () {
      const year = dayjs().format('YYYY') - this.datetime.slice(0, 4)
      const month =
        year === 0
          ? dayjs().format('MM') - this.datetime.slice(5)
          : 12 - this.datetime.slice(5)
      const allMonth =
        (year === 0 || year === 1 ? 0 : year - 1) * 12 +
        (year === 0 ? month : month + parseInt(dayjs().format('MM')))
      this.liveTime = allMonth
      this.number = (((900 - allMonth) / 900) * 100).toFixed(2) + '%'
    }
  }
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
