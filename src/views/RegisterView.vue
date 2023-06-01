<script>
import { RouterLink, RouterView } from 'vue-router'

export default {}
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
              <h1 class="text-center display-1 fs-1 fw-medium">Register</h1>
              <p class="text-center fw-light">Create new account for you</p>
              <form>
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
                    />
                  </div>
                  <div class="mb-3 col-8">
                    <label for="password" class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password-login"
                      autocomplete="off"
                    />
                  </div>
                  <div class="col-8 d-flex flex-column align-items-center pt-3">
                    <button type="submit" class="btn btn-primary w-100">Register</button>
                    <p class="mb-0">
                      <RouterLink :to="'/login'">Already have an account? Log in</RouterLink>
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
