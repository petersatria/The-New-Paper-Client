<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  data() {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ['handleLogin', 'handleLogout']),
    submitLoginHandler() {
      this.handleLogin(this.userData)
    }
  }
}
</script>

<template>
  <div class="bg-body-secondary position-absolute w-100 min-vh-100">
    <section class="container">
      <div class="bg-body-secondary m-0 p-0 top-0 start-0">
        <div class="row m-0 p-0 min-vh-100 py-5 justify-content-center align-content-center">
          <div class="d-none d-md-block col-6 p-0 bg-black">
            <p class="text-white">TEST</p>
          </div>
          <div class="col-12 col-md-6 p-0">
            <div class="card border px-4 py-5">
              <h1 class="text-center display-1 fs-1 fw-medium">Login</h1>
              <p class="text-center fw-light">Get access to your account</p>
              <form @submit.prevent="submitLoginHandler">
                <div class="row d-flex justify-content-center">
                  <div class="mb-3 col-8">
                    <label for="email" class="form-label">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email-login"
                      name="email"
                      aria-describedby="emailHelp"
                      autocomplete="email"
                      v-model="userData.email"
                    />
                  </div>
                  <div class="mb-3 col-8">
                    <label for="password" class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password-login"
                      autocomplete="off"
                      v-model="userData.password"
                    />
                  </div>
                  <div class="col-8 d-flex flex-column align-items-center pt-3">
                    <button type="submit" class="btn btn-primary w-100">Login</button>
                    <p class="mb-0">or Sign in with</p>
                    <p>
                      <RouterLink href="/register" :to="'register'">Create an account</RouterLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
