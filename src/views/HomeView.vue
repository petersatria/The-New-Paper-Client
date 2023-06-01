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
    this.fetchArticles(9)
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
      <div class="col-3 col-md-4 bg-body-tertiary border-5 d-none d-md-block sidebar">
        <p>sidebar</p>
      </div>
      <div class="col">
        <section class="row g-4">
          <p>All Articles</p>
          <Card v-for="item in articles" :key="item.id" :article="item" />
          <div class="d-flex justify-content-center">
            <nav>
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sidebar {
  border-radius: 10px;
}

.page-item a {
  color: #333;
}
</style>
