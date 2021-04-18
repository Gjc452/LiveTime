<template>
  <layout>
    <p class="month" ref="p">中国现阶段人均寿命 900 个月</p>
    <button v-if="!hasTime" @click="open">
      点击设置出生年月，查看人生进度
    </button>
    <div v-else class="changeTime">
      <p>
        {{ datetime.replace("-", " 年 ").concat(" 月") }}至今
        {{ liveTime }} 个月
      </p>
      <div>
        <button @click="open">换一个日期</button>
        <button @click="reset">清除记录</button>
      </div>
    </div>
    <Cell :number="number" />
    <p class="maxim">{{ this.maxim }}</p>
    <yd-datetime
      v-show="false"
      :callback="setAge"
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
import axios from 'axios'

export default {
  components: { Layout, Cell },
  name: 'Home',
  data () {
    return {
      datetime: '',
      endDate: dayjs().format('YYYY-MM'),
      number: '100%',
      liveTime: 0,
      hasTime: false,
      maxim: '',
      n: ''
    }
  },
  created () {
    this.$store.commit('fetchAge')
    if (this.$store.state.age) {
      this.datetime = this.$store.state.age
      this.hasTime = true
      this.number = (((900 - this.liveTime) / 900) * 100).toFixed(2) + '%'
    } else {
      this.datetime = dayjs().format('YYYY-MM')
      this.hasTime = false
      this.number = '100%'
    }
  },
  updated () {
    if (this.$store.state.age) {
      this.hasTime = true
      this.number = (((900 - this.liveTime) / 900) * 100).toFixed(2) + '%'
    } else {
      this.hasTime = false
      this.number = '100%'
    }
  },
  methods: {
    getMaxim () {
      axios
        .get(
          'https://api.tianapi.com/txapi/dictum/index?key=3082d76fad6ab5bf50099c9ac54a3208&num=1'
        )
        .then((response) => {
          console.log(1)
          this.maxim = response.data.newslist[0].content
        })
    },
    open () {
      this.$refs.datetime.open()
    },
    reset () {
      this.datetime = dayjs().format('YYYY-MM')
      this.$nextTick(() => {
        this.$store.commit('resetAge')
        this.number = '100%'
      })
    },
    setAge () {
      const year = dayjs().format('YYYY') - this.datetime.slice(0, 4)
      const month =
        year === 0
          ? dayjs().format('MM') - this.datetime.slice(5)
          : 12 - this.datetime.slice(5)
      const allMonth =
        (year === 0 || year === 1 ? 0 : year - 1) * 12 +
        (year === 0 ? month : month + parseInt(dayjs().format('MM'))) +
        1
      this.liveTime = allMonth
      this.$watch('datetime', function () {
        this.$store.commit('setAge', this.datetime)
      })
    }
  },
  watch: {
    liveTime: function () {
      this.getMaxim()
    }
  }
}
</script>

<style lang="scss" scoped>
.changeTime {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
  }
  button {
    margin: 16px 5px 0;
  }
}
.month {
  margin-top: 40px;
  padding: 16px 0;
  font-size: 16px;
}
button {
  background: transparent;
  border: 1px solid black;
  padding: 6px 8px;
  border-radius: 2px;
}
.maxim {
  font-size: 14px;
}
</style>
