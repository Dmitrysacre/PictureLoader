<template>
  <div class="container">
    <Header />
    <div class="main">
      <div class="col1">
        <div class="page-name">Главная</div>
      </div>
      <div class="col2">
        <div class="picture"></div>
        <load-button class="load-button" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Header } from '@/components/Header'
import { LoadButton } from '@/components/LoadButton'

export default Vue.extend({
  components: {
    Header,
    LoadButton,
  },
})
</script>

<style>
.container {
  --central-width: 453px;
}
.main {
  margin-top: 40px;
  background: #fff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  height: 468px;
  display: flex;
}

.col1 {
  width: calc((100% - var(--central-width)) / 2);
}
.col2 {
  width: var(--central-width);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.col3 {
  width: calc((100% - var(--central-width)) / 2);
}
.page-name {
  margin-top: 67px;
  margin-left: 30px;
  font: normal normal normal 22px/25px Roboto, sans-serif;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;
}
.picture {
  margin-top: 79px;
  background: transparent linear-gradient(180deg, #d29ef8 0%, #00ced6 100%) 0%
    0% no-repeat padding-box;
  height: 252px;
  width: 100%;
}
.load-button {
  margin: 31px 0;
}
</style>
