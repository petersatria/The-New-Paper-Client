<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import { useArticleStore } from '../stores/article'
import CardLatest from '../components/CardLatest.vue'
export default {
  data() {
    return {
      latestArticle: []
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
    this.fetchArticles(9, 1)
  }
}
</script>

<template>
  <section class="container mt-4">
    <div class="row">
      <div class="col-12">
        <p>Latest Articles</p>
        <div class="row">
          <div class="col-12">
            <!-- <CardLatest :article="articles[2]" /> -->
          </div>
          <div class="col-6 py-3">
            <!-- <CardLatest :article="articles[1]" /> -->
          </div>
          <div class="col-6 py-3">
            <!-- <CardLatest :article="articles[0]" /> -->
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

.sidebar {
  border-radius: 10px;
}

.page-item a {
  color: #333;
}
</style>
