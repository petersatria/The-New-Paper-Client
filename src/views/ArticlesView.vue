<script>
import { mapActions, mapState } from 'pinia'
import { useArticleStore } from '../stores/article'
import Card from '../components/Card.vue'
export default {
  data() {
    return {
      pageNumber: this.$route.query.page,
      filter: [],
      tempFilter: this.$route.query.filter
    }
  },
  components: { Card },
  computed: {
    ...mapState(useArticleStore, ['articles', 'currentPage', 'totalPages', 'categories'])
  },
  methods: {
    ...mapActions(useArticleStore, ['fetchArticles', 'fetchCategories']),
    pagination(page) {
      if (this.filter?.length > 0) {
        this.$router.push({ query: { page: `${page}`, filter: this.filter } })
        this.fetchArticles(9, page, this.filter)
      } else {
        this.fetchArticles(9, page)
        this.$router.push({ query: { page: `${page}` } })
      }
    },
    filterHandler() {
      this.$router.push({ query: { page: 1, filter: this.filter } })
      this.fetchArticles(9, 1, this.filter)
    },
    clearFilter() {
      this.$router.replace('/')
      this.filter = []
      this.fetchArticles(9, 1)
    }
  },
  created() {
    console.log(this.$route.query.filter)
    console.log(this.tempFilter, 'filter not query')
    console.log(this.pageNumber, 'pagenumber')
    if (this.tempFilter) {
      this.filter = this.$route.query.filter
      this.fetchArticles(9, this.pageNumber || 1, this.tempFilter)
    } else if (this.filter.length > 0) {
      this.fetchArticles(9, this.pageNumber || 1, this.filter)
    } else {
      this.fetchArticles(9, this.pageNumber || 1)
    }
    this.fetchCategories()
  }
}
</script>

<template>
  <h1 class="text-center my-5">Articles</h1>
  <section class="container">
    <div class="row">
      <div class="col-3 col-md-4 bg-body-tertiary border-5 d-none d-md-block sidebar">
        <h4>Categories</h4>
        <form @submit.prevent="filterHandler">
          <div
            class="form-check my-4 border-bottom border-2"
            v-for="(item, index) in categories"
            :key="index"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="item.id"
              v-model="filter"
              :id="item.id"
            />
            <label class="form-check-label" :for="item.id"> {{ item.name }} </label>
          </div>
          <button type="submit" class="btn btn-success btn-search">Search</button>
        </form>
        <button @click="clearFilter" class="btn btn-clear">Clear</button>
      </div>
      <div class="col">
        <section class="row g-4">
          <p class="mb-0">Happy reading ~ The New Paper</p>
          <div v-for="item in articles" :key="item.id" class="col-6 col-md-4">
            <Card :article="item" />
          </div>
          <div class="d-flex justify-content-center">
            <nav>
              <ul class="pagination">
                <li class="page-item">
                  <a
                    @click="pagination(currentPage - 1)"
                    class="page-link"
                    :class="currentPage - 1 < 1 ? 'disabled' : ''"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a
                    @click="pagination(currentPage - 2)"
                    v-if="currentPage - 1 > 1"
                    class="page-link"
                    href="#"
                    aria-label="Next"
                    disabled
                  >
                    <span aria-hidden="true">...</span>
                  </a>
                </li>
                <!-- <li class="page-item"><a @click="pagination" class="page-link" href="#">1</a></li> -->
                <!-- <li class="page-item"><a class="page-link" href="#">2</a></li> -->
                <!-- <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                <li class="page-item" v-for="index in totalPages" :key="index">
                  <a
                    @click="pagination(index)"
                    v-if="index < currentPage + 2 && index > currentPage - 2"
                    class="page-link"
                    :class="index == currentPage ? 'active' : ''"
                    href="#"
                    >{{ index }}</a
                  >
                </li>
                <li class="page-item">
                  <a
                    @click="pagination(currentPage + 2)"
                    v-if="currentPage + 1 < totalPages"
                    class="page-link"
                    href="#"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">...</span>
                  </a>
                </li>
                <li class="page-item">
                  <a
                    @click="pagination(currentPage + 1)"
                    class="page-link"
                    :class="currentPage + 1 > totalPages ? 'disabled' : ''"
                    href="#"
                    aria-label="Next"
                  >
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
.page-item a {
  color: #333;
  border: none;
}

.page-link.active {
  background-color: #687d82;
  color: white;
}

button {
  margin: 5px 0;
  width: 50%;
}

.btn-clear {
  color: white;
  background-color: #687d82;
  border: #687d82;
}

.btn-clear:hover {
  background-color: #4c646a;
  border: #4c646a;
  color: white;
}

.btn-clear:active:focus {
  background-color: #687d82;
  border: #687d82;
  color: white;
}

.btn-search {
  color: white;
  background-color: #f57a35;
  border: #f57a35;
}

.btn-search:hover {
  background-color: #d3601e;
  border: #d3601e;
  color: white;
}

.btn-search:active:focus {
  background-color: #f57a35;
  border: #f57a35;
  color: white;
}

.form-check-input:checked {
  background-color: #f57a35;
  border-color: #d3601e;
}

.form-check-input {
  background-color: #cdd8db;
  border-color: #687d82;
}
</style>
