import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    baseUrl: 'http://localhost:3000/api',
    access_token: localStorage.access_token,
    bookmarks: []
  }),
  getters: {

  },
  actions: {
    async handleRegister(userData) {
      try {
        await axios({
          method: 'POST',
          url: this.baseUrl + '/register',
          data: userData
        })
        this.router.push('/login')
      } catch (err) {
        console.log(err);
      }
    },
    async handleLogin(userData) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.baseUrl + '/login',
          data: userData
        })
        console.log(data);
        this.access_token = data.access_token
        localStorage.access_token = data.access_token
        this.router.push('/')
      } catch (err) {
        console.log(err);
      }
    },
    handleLogout() {
      localStorage.clear()
      this.access_token = null
      this.router.push('/login')
    },
    async addToBookmarks(id) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.baseUrl + '/bookmarks/' + id,
          headers: { access_token: this.access_token }
        })
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchBookmarks() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/bookmarks/',
          headers: { access_token: this.access_token }
        })
        console.log(data);
        this.bookmarks = data.data
      } catch (err) {
        console.log(err);
      }
    }
  },
})