<template>
  <Layout @click.native="addCount">
    <p>{{ this.number.time }}</p>
    <div class="cellWrapper">
      <cell :number="this.number.result" class="contentCell" />
      <ul>
        <li :class="{ select: count === 1 }"></li>
        <li :class="{ select: count === 2 }"></li>
        <li :class="{ select: count === 3 }"></li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import dayjs from 'dayjs'
import Cell from '../components/Cell.vue'
import Layout from '../components/Layout.vue'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
dayjs.extend(isLeapYear)
dayjs.extend(dayOfYear)
export default {
  components: { Layout, Cell },
  name: 'Time',
  data () {
    return {
      day: dayjs().format('YYYY 年 M 月 DD 日'),
      month: dayjs().format('YYYY 年 M 月'),
      year: dayjs().format('YYYY 年'),
      count: 1,
      now: dayjs()
    }
  },
  created () {
    setInterval(() => {
      this.now = this.now.add(1, 'second')
    }, 1000)
  },
  computed: {
    number: function () {
      let result, time
      const dayN =
        (
          ((86400 - this.now.unix() + dayjs('20210418').unix()) / 86400) *
          100
        ).toFixed(4) + '%'
      const monthN =
        (
          ((dayjs().daysInMonth() - dayjs().format('DD') + 1) /
            dayjs().daysInMonth()) *
          100
        ).toFixed(2) + '%'
      const yearN = dayjs().isLeapYear()
        ? (((366 - dayjs().dayOfYear() + 1) / 366) * 100).toFixed(2) + '%'
        : (((365 - dayjs().dayOfYear() + 1) / 365) * 100).toFixed(2) + '%'
      switch (this.count) {
        case 1:
          result = dayN
          time = this.day
          break
        case 2:
          result = monthN
          time = this.month
          break
        case 3:
          result = yearN
          time = this.year
          break
        default:
      }
      return { result, time }
    }
  },
  methods: {
    addCount () {
      this.count !== 3 ? (this.count += 1) : (this.count = 1)
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-top: 40px;
  padding: 20px;
  font-size: 22px;
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
