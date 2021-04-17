<template>
  <div class="cellWrapper">
    <div class="cellTop"></div>
    <div class="cell">
      <div class="time">100%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cell'
}
</script>
<style lang="scss" scoped>
.cellWrapper {
  height: 36vh;
  margin: 80px 0;
  position: relative;
  .cellTop {
    width: 50%;
    height: 12px;
    background-color: blanchedalmond;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px 10px 0 0;
  }
  .cell {
    position: relative;
    height: 100%;
    padding: 75px;
    border-radius: 8px;
    background-color: blanchedalmond;
    overflow: hidden;
    .time {
      position: absolute;
      bottom: 0;
      background-color: lightblue;
      width: 100%;
      height: 100%;
      display: flex;
      left: 0;
      justify-content: center;
      align-items: center;
      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 600px;
        height: 600px;
        border-radius: 45%;
        background-color: blanchedalmond;
        top: -592px;
        animation: wave 7s linear infinite;
      }
      @keyframes wave {
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
