<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import { useArticleStore } from '../stores/article'
import CardLatest from '../components/CardLatest.vue'
export default {
  components: { CardLatest },
  computed: {
    ...mapState(useArticleStore, ['allArticles']),
    latestArticle() {
      return this.allArticles.slice(0, 3)
    }
  },
  methods: {
    ...mapActions(useArticleStore, ['fetchArticles'])
  },
  created() {
    this.fetchArticles()
  }
}
</script>

<template>
  <section class="container mt-4">
    <div class="row">
      <div class="col-12">
        <p>Breaking News</p>
        <div class="row">
          <div class="col-12">
            <CardLatest :article="latestArticle[2]" />
          </div>
          <div class="col-6 py-3">
            <CardLatest :article="latestArticle[1]" />
          </div>
          <div class="col-6 py-3">
            <CardLatest :article="latestArticle[0]" />
          </div>
        </div>
      </div>
    </div>
    <div class="line my-5"></div>
  </section>
  <RouterView />
</template>

<style scoped>
.line {
  border-bottom: 1px solid #eaebee;
}

.page-item a {
  color: #333;
}
</style>
