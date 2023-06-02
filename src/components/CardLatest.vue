<script>
export default {
  props: ['article'],
  methods: {
    toDetailArticle() {
      this.$router.push(`/articles/${this.article.id}`)
    }
  },
  computed: {
    formattedDate() {
      const date = new Date(this.article.updatedAt)
      return date.toLocaleString('id-ID', { timeZone: 'UTC' })
    }
  }
}
</script>

<template>
  <div class="card text-bg-dark" @click="toDetailArticle">
    <img :src="article.imgUrl" class="card-img" alt="..." height="250" />
    <div class="card-img-overlay d-flex flex-column justify-content-end">
      <h5 class="card-title">{{ article.title }}</h5>
      <p class="card-text">
        <small>{{ formattedDate }}</small>
      </p>
    </div>
  </div>
</template>

<style scoped>
div {
  cursor: pointer;
}
h5 {
  font-size: 16px;
}
</style>
