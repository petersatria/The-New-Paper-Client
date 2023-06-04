import { defineStore } from 'pinia'
import axios from 'axios'
import { errorHandler, toast } from '../helpers/helper'

export const useUserStore = defineStore('user', {
  state: () => ({
    baseUrl: 'https://news-server.petersox.online/api',
    access_token: localStorage.access_token,
    bookmarks: []
  }),
  getters: {

  },
  actions: {
    async handleRegister(userData) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.baseUrl + '/register',
          data: userData
        })
        this.router.push('/login')
        toast('success', data.message)
      } catch (err) {
        errorHandler(err)
      }
    },
    async handleLogin(userData) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.baseUrl + '/login',
          data: userData
        })
        this.access_token = data.access_token
        localStorage.access_token = data.access_token
        this.router.push('/')
        toast('success', data.message)
      } catch (err) {
        errorHandler(err)
      }
    },
    handleLogout() {
      localStorage.clear()
      this.access_token = null
      this.router.push('/login')
      toast('success', 'Success to logout')
    },
    async addToBookmarks(id) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.baseUrl + '/bookmarks/' + id,
          headers: { access_token: this.access_token }
        })
        toast('success', data.message)
      } catch (err) {
        errorHandler(err)
      }
    },
    async fetchBookmarks() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/bookmarks/',
          headers: { access_token: this.access_token }
        })
        this.bookmarks = data.data
      } catch (err) {
        errorHandler(err)
      }
    },
    async handleCredentialResponse(response) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/google-sign-in`,
          headers: {
            google_token: response.credential
          }
        })
        this.access_token = data.access_token
        localStorage.access_token = data.access_token
        this.router.push('/')
        toast('success', data.message)
      } catch (err) {
        errorHandler(err)
      }
    },
  },
})