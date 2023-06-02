<script>
import { mapActions, mapState } from 'pinia'
import { useArticleStore } from '../stores/article'

export default {
  methods: {
    ...mapActions(useArticleStore, ['fetchArticleById'])
  },
  computed: {
    ...mapState(useArticleStore, ['article'])
  },
  created() {
    console.log(this.$route.params)
    this.fetchArticleById(this.$route.params.id)
  }
}
</script>

<template>
  <section class="container">
    <div class="row justify-content-center my-2">
      <div class="col-4 text-end">
        <p>{{ article.updatedAt }}</p>
      </div>
      <div class="col-4">{{ article.Category.name }}</div>
    </div>
    <div class="row">
      <h1>{{ article.title }}</h1>
      <img :src="article.imgUrl" class="img-fluid" alt="" />
      <p>
        {{ article.content }}
      </p>
      <p>Article by {{ article.User.username }}</p>
    </div>
  </section>

  <section class="container">
    <div class="row d-flex flex-row justify-content-center text-center">
      <h2>You Might Also Like</h2>
      <div class="col-12 col-md-4 col-lg-3">
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
      </div>
      <div class="col-12 col-md-4 col-lg-3">
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
      </div>
      <div class="col-12 col-md-4 col-lg-3">
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
      </div>
    </div>
  </section>
</template>
