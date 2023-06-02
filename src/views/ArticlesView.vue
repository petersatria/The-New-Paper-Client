<script>
import { mapActions, mapState } from 'pinia'
import { useArticleStore } from '../stores/article'
import Card from '../components/Card.vue'
export default {
  components: { Card },
  computed: {
    ...mapState(useArticleStore, ['articles'])
  },
  methods: {
    ...mapActions(useArticleStore, ['fetchArticles']),
    pagination() {
      // console.log('pagination')
      // this.fetchArticles(9, 2)
      // console.log(this.articles)
    }
  },
  created() {
    console.log(this.articles)
    this.fetchArticles(9)
  }
}
</script>

<template>
  <section class="container">
    <h1>Articles</h1>
    <div class="row">
      <div class="col-3 col-md-4 bg-body-tertiary border-5 d-none d-md-block sidebar">
        <p>sidebar</p>
      </div>
      <div class="col">
        <section class="row g-4">
          <p>All Articles</p>
          <div v-for="item in articles" :key="item.id" class="col-6 col-md-4">
            <Card :article="item" class="card-custom" />
          </div>
          <div class="d-flex justify-content-center">
            <nav>
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a @click="pagination" class="page-link" href="#">1</a></li>
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
.card-custom {
  cursor: pointer;
}
</style>
