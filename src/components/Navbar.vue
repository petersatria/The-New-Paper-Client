<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/user'
import { useArticleStore } from '../stores/article'

export default {
  computed: {
    ...mapState(useUserStore, ['access_token']),
    currentPage() {
      return this.$route.name
    }
  },
  methods: {
    ...mapActions(useUserStore, ['handleLogout']),
    ...mapActions(useArticleStore, ['clearFilter']),
    logoutHandler() {
      this.handleLogout()
    },
    homeArticlesHandler() {
      this.clearFilter()
    }
  }
}
</script>

<template>
  <section>
    <div class="container-fluid m-0 p-0">
      <nav class="navbar navbar-expand-md">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a @click="homeArticlesHandler" class="navbar-brand me-auto mb-2 mb-lg-0"
              ><img src="../assets/images/The_New_Paper.svg" height="50" alt=""
            /></a>
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink
                  class="nav-link active"
                  aria-current="page"
                  :to="'/'"
                  v-if="currentPage === 'register' && currentPage === 'login'"
                  >Home</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" :to="'/bookmarks'" v-if="access_token"
                  >My Bookmarks</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="nav-link"
                  :to="'/login'"
                  v-if="currentPage !== 'login' && !access_token"
                  >Sign In</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="nav-link"
                  :to="'/register'"
                  v-if="currentPage !== 'register' && !access_token"
                  >Sign Up</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  @click="logoutHandler"
                  class="nav-link"
                  :to="'/login'"
                  v-if="access_token"
                  >Sign Out</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
