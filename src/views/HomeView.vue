<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import { useArticleStore } from '../stores/article'
import CardLatest from '../components/CardLatest.vue'
import Card from '../components/Card.vue'
export default {
  data() {
    return {
      // latestArticle: []
    }
  },
  components: { CardLatest, Card },
  computed: {
    ...mapState(useArticleStore, ['articles']),
    latestArticle() {
      // console.log('masuk latest')
      return this.articles.slice(0, 3)
    }
  },
  methods: {
    ...mapActions(useArticleStore, ['fetchArticles'])
    // latestArticleData() {
    //   console.log('masuk latest')
    //   console.log('yakah')
    //   return (this.latestArticle = this.articles.splice(0, 3))
    // }
  },
  created() {
    this.fetchArticles(8)
    // this.latestArticle = this.articles
    // this.latestArticleData()
    // this.latestArticle = this.articles
    // console.log(this.articles)
  }
}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <p>Top 5 article</p>
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
  </section>

  <section class="container">
    <h1>Articles</h1>
    <div class="row">
      <div class="col-3 col-md-4 bg-black d-none d-md-block">
        <p>sidebar</p>
      </div>
      <div class="col">
        <section class="row g-4">
          <p>All Articles</p>
          <Card v-for="item in articles" :key="item.id" :article="item" />
        </section>
      </div>
    </div>
  </section>
</template>
