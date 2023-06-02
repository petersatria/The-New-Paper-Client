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
    // this.bookmarks.forEach((e) => console.log(e.id))
    this.fetchBookmarks()
  }
}
</script>

<template>
  <section class="container">
    <h1>My Bookmarks</h1>
    <!-- <Card v-for="item in bookmarks" :key="item.id" :article="item.Article" /> -->
    <div class="row">
      <div class="col-6 col-md-3 g-3" v-for="item in bookmarks" :key="item.id">
        <CardLatest :article="item.Article" />
      </div>
    </div>
  </section>
</template>
