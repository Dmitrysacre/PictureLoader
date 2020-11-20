<template>
  <div class="container">
    <div style="display: flex">
      <div class="pic" :style="`background-image: url(${src})`"></div>
      <div class="trash-wrapper">
        <div class="trash" @click="$emit('trashClick')">x</div>
      </div>
    </div>
    <div class="metadata">
      <div class="title">{{ title }}</div>
      <div class="loading-time">
        {{ loadingTime.toISOString().replace('T', ' ').slice(0, 19) }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    loadingTime: {
      type: (Date as any) as () => Date,
      required: true,
    },
  },
})
</script>
<style scoped>
.container {
  display: flex;
}
.pic {
  width: 169px;
  height: 88px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.metadata {
  margin-left: 27px;
}
.title {
  font: normal normal bold 22px/25px Roboto, sans-serif;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;
}
.loading-time {
  margin-top: 5px;
  font: normal normal normal 22px/25px Roboto, sans-serif;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;
}
.trash-wrapper {
  position: relative;
  width: 0;
}
.trash {
  position: absolute;
  bottom: 2px;
  right: 2px;
  cursor: pointer;
}
</style>
