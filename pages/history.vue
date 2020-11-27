<template>
  <div class="container">
    <Header />
    <div class="main">
      <div class="col1">
        <div class="arrow-back"><RouterLink to="/">←</RouterLink></div>
        <div class="page-name">История</div>
      </div>
      <div class="col2">
        <loaded-item
          v-for="item in pictures"
          :key="item.src"
          class="loaded-item"
          :src="item.src"
          :loading-time="item.loadingTime"
          :title="item.title"
          @trashClick="onTrashClick(item)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Header } from '@/components/Header'
import { LoadedItem } from '@/components/LoadedItem'
import { Picture } from '~/store/pictures'

export default Vue.extend({
  components: {
    Header,
    LoadedItem,
  },
  computed: {
    pictures() {
      return this.$store.state.pictures.list as Picture[]
    },
  },
  methods: {
    getUrl(picture: Picture) {
      return URL.createObjectURL(picture)
    },
    onTrashClick(file: Picture) {
      this.$store.commit('pictures/remove', file)
    },
  },
})
</script>

<style scoped>
.container {
  --central-width: 453px;
}
.main {
  margin-top: 40px;
  background: #fff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  height: 593px;
  display: flex;
  overflow: scroll;
}

.col1 {
  padding-top: 67px;
  padding-left: 30px;
  display: flex;
  width: calc((100% - var(--central-width)) / 2);
}
.col2 {
  width: var(--central-width);
  margin-top: 79px;
}
.col3 {
  width: calc((100% - var(--central-width)) / 2);
}
.page-name {
  font: normal normal normal 22px/25px Roboto, sans-serif;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;
  margin-left: 14px;
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
.loaded-item {
  margin-bottom: 30px;
}
.arrow-back > a {
  color: #000;
  opacity: 0.54;
  text-decoration: none;
}
</style>
