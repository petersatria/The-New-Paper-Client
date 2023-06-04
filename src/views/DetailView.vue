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
      this.fetchArticles(3)
    }
  },
  computed: {
    ...mapState(useArticleStore, [
      'article',
      'articleQR',
      'articles',
      'detailCategory',
      'detailName'
    ]),
    formattedDate() {
      const date = new Date(this.article.updatedAt)
      return `${date.getDate()}.${date.getMonth()} ${date.getFullYear()}`
    }
  },
  created() {
    this.fetchArticles(3)
    this.fetchArticleById(this.$route.params.id)
    // this.getQrCode(this.$route.params.id)
  }
}
</script>

<template>
  <section class="container">
    <div class="row justify-content-center my-2">
      <div class="col-4 text-end">
        <p class="date">{{ formattedDate }}</p>
      </div>
      <div class="col-4">{{ detailCategory }}</div>
    </div>
    <div class="row">
      <h1>{{ article.title }}</h1>
      <img :src="article.imgUrl" class="img-fluid" alt="" />
      <p>
        {{ article.content }}
      </p>
    </div>
    <div class="row">
      <div class="col">
        <p>Article by {{ detailName }}</p>
      </div>
      <!-- <div class="col-2" v-html="articleQR"></div> -->
    </div>
  </section>

  <section class="container">
    <div class="row d-flex flex-row justify-content-center text-center">
      <h2>You Might Also Like</h2>
      <div v-for="item in articles" :key="item.id" class="col-12 col-md-4 col-lg-3">
        <Card :article="item" @click="articleByIdHandler" />
      </div>
      <!-- <div class="col-12 col-md-4 col-lg-3">
        <div class="card border-white">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1600/https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg"
            class="card-img"
            alt="..."
            height="174"
          />
          <h5 class="card-title pt-2">article.Category.name</h5>
          <p class="card-text">article.title</p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.date {
  color: #bfbfc8;
}
</style>
