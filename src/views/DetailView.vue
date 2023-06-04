<script>
import { mapActions, mapState } from 'pinia'
import { useArticleStore } from '../stores/article'
import Card from '../components/Card.vue'

export default {
  components: { Card },
  methods: {
    ...mapActions(useArticleStore, ['fetchArticleById', 'getQrCode', 'fetchArticles']),
    articleByIdHandler() {
      this.fetchArticleById(this.$route.params.id)
      this.getQrCode(this.$route.params.id)
      this.fetchArticles()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  computed: {
    ...mapState(useArticleStore, [
      'article',
      'articleQR',
      'allArticles',
      'detailCategory',
      'detailName'
    ]),
    formattedDate() {
      const date = new Date(this.article.updatedAt)
      return `${date.getDate()}.${date.getMonth()} ${date.getFullYear()}`
    },
    randomArticles() {
      let articles = this.allArticles.sort(() => 0.5 - Math.random())
      return articles.slice(0, 3)
    }
  },
  created() {
    this.fetchArticles()
    this.fetchArticleById(this.$route.params.id)
    this.getQrCode(this.$route.params.id)
  }
}
</script>

<template>
  <section class="container" v-if="Object.keys(article).length > 0">
    <div class="row justify-content-center my-2">
      <div class="col-4 text-end">
        <p class="date">{{ formattedDate }}</p>
      </div>
      <div class="col-4">{{ detailCategory }}</div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9">
        <h1>{{ article.title }}</h1>
        <img :src="article.imgUrl" class="img-fluid" alt="" />
        <p class="article-content">
          {{ article.content }}
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9 d-flex justify-content-between">
        <p>Article by {{ detailName }}</p>
        <div class="col-2" v-html="articleQR"></div>
      </div>
    </div>
  </section>

  <section class="container">
    <div class="row d-flex flex-row justify-content-center text-center">
      <h2>You Might Also Like</h2>
      <div v-for="item in randomArticles" :key="item.id" class="col-12 col-md-4 col-lg-3">
        <Card :article="item" @click="articleByIdHandler" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.date {
  color: #bfbfc8;
}

img {
  max-height: 50vh;
  object-fit: cover;
  width: 100%;
  height: auto;
}

.article-content {
  font-weight: 400;
  line-height: 2.2;
  color: #7c7c80;
}
</style>
