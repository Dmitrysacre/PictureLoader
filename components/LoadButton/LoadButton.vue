<template>
  <button type="button" @click="onClick">Загрузить</button>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
})
</script>
<style scoped>
button {
  background: #006896 0% 0% no-repeat padding-box;
  box-shadow: 0 2px 2px #0000003d;
  border-radius: 2px;
  opacity: 1;
  font: normal normal normal 16px/19px Roboto, sans-serif;
  letter-spacing: 0;
  color: #fff;
  width: 168px;
  height: 36px;
  border: 0;
}
</style>
