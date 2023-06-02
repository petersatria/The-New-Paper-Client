<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import { useArticleStore } from '../stores/article'
import CardLatest from '../components/CardLatest.vue'
export default {
  data() {
    return {
      // latestArticle: []
    }
  },
  components: { CardLatest },
  computed: {
    ...mapState(useArticleStore, ['articles'])
    // latestArticle() {
    //   return this.articles.slice(0, 3)
    // }
  },
  methods: {
    ...mapActions(useArticleStore, ['fetchArticles'])
  },
  created() {
    this.fetchArticles(3)
  }
}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <p>Latest Articles</p>
        <div class="row">
          <!-- <div class="col-12">
            <CardLatest />
          </div>
          <div class="col-6 py-3">
            <CardLatest />
          </div>
          <div class="col-6 py-3">
            <CardLatest />
          </div> -->
          <div class="col-12">
            <!-- <CardLatest v-for="item in latestArticle" :key="item.id" :article="item" /> -->
            <CardLatest :article="articles[2]" />
          </div>
          <div class="col-6 py-3">
            <CardLatest :article="articles[1]" />
          </div>
          <div class="col-6 py-3">
            <CardLatest :article="articles[0]" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <RouterView />
</template>

<style scoped>
.sidebar {
  border-radius: 10px;
}

.page-item a {
  color: #333;
}
</style>
