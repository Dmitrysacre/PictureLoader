<template>
  <div class="header">
    <div class="link-container">
      <div
        v-for="item in links"
        :key="item.link"
        class="link"
        :href="item.link"
      >
        <RouterLink :to="item.link">{{ item.title }}</RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: [
        {
          title: 'Главная',
          link: '/',
        },
        {
          title: 'История',
          link: '/history',
        },
      ],
    }
  },
})
</script>
<style scoped>
.header {
  height: 64px;
  background: #fff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
}
.link-container {
  display: flex;
  padding: 20px 15px 19px;
}
.link a {
  font: normal normal normal 22px/25px Roboto, sans-serif;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;
  margin: 0 15px;
  text-decoration: none;
}
.link a.nuxt-link-exact-active {
  color: #000;
}
</style>
