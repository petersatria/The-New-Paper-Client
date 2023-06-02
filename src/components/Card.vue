<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  props: ['article'],
  methods: {
    ...mapActions(useUserStore, ['addToBookmarks']),
    toDetailArticle() {
      this.$router.push(`/articles/${this.article.id}`)
    },
    bookmarksHandler() {
      this.addToBookmarks(this.article.id)
    }
  }
}
</script>

<template>
  <div class="card border-white">
    <div @click="toDetailArticle">
      <img :src="article.imgUrl" class="card-img" alt="..." height="120" />
      <h5 class="card-title pt-2">{{ article.Category.name }}</h5>
      <p class="card-text">{{ article.title }}</p>
    </div>
    <button @click="bookmarksHandler" class="btn btn-danger">Bookmark</button>
  </div>
</template>
