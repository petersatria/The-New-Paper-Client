<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/user'

import Card from '../components/Card.vue'
import CardLatest from '../components/CardLatest.vue'
export default {
  components: { Card, CardLatest },
  computed: {
    ...mapState(useUserStore, ['bookmarks'])
  },
  methods: {
    ...mapActions(useUserStore, ['fetchBookmarks'])
  },
  created() {
    this.fetchBookmarks()
  }
}
</script>

<template>
  <section class="container">
    <h1>My Bookmarks</h1>
    <div class="row">
      <div v-if="bookmarks.length === 0" class="d-flex flex-column justify-content-center">
        <img src="../assets/images/empty_list.svg" alt="" />
        <h3 class="text-center my-2">You don't have any bookmark yet</h3>
      </div>
      <div v-else class="col-6 col-md-3 g-3" v-for="item in bookmarks" :key="item.id">
        <CardLatest :article="item.Article" />
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  width: 100%;
  max-height: 50vh;
}
</style>
