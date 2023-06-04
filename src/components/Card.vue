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
      if (localStorage.access_token) {
        this.addToBookmarks(this.article.id)
      } else {
        this.$router.push('/login')
      }
    }
  },
  computed: {
    currentPage() {
      return this.$route.name
    }
  }
}
</script>

<template>
  <div class="card border-white">
    <div>
      <div class="img-wrapper">
        <img
          :src="article.imgUrl"
          class="card-img"
          alt="..."
          height="174"
          @click="toDetailArticle"
        />
      </div>
      <div class="d-flex flex-row justify-content-between align-items-center py-2">
        <h5 class="card-title pt-2">{{ article.Category.name }}</h5>
        <h4
          class="bi bi-bookmark-plus"
          v-if="currentPage === 'home'"
          @click="bookmarksHandler"
        ></h4>
      </div>
      <p @click="toDetailArticle" class="card-text">{{ article.title }}</p>
    </div>
  </div>
</template>

<style scoped>
img,
p,
h4 {
  cursor: pointer;
}

h4:hover {
  color: #f57a35;
  transition: 0.8s;
  font-weight: 700;
  font-size: 30px;
}

.img-wrapper {
  overflow: hidden;
  border-radius: 5px;
  margin: 0 auto;
}

.img-wrapper img {
  width: 100%;
  transition: 0.5s all ease-in-out;
}

img:hover {
  transform: scale(1.5);
}
</style>
