import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('article', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    articles: [],
    article: {},
    articleQR: '',
    latestArticle: []
  }),
  getters: {

  },
  actions: {
    async fetchArticles(size, page) {
      try {
        let url = this.baseUrl + `/api/articles?page[size]=${size}`
        if (page) {
          url = this.baseUrl + `/api/articles?page[size]=${size}8&page[number]=${page}`
        }
        const { data } = await axios({ url })
        // if (size === 3) {
        //   this.latestArticles = data.data.rows
        // } else {
        // }
        this.articles = data.data.rows
      } catch (error) {
        console.log(error);
      }
    },
    async fetchArticleById(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/api/articles/${id}`
        })
        this.article = data.data
      } catch (err) {
        //route
        console.log(err);
      }
    },
    async getQrCode(id) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.baseUrl + `/api/articles/${id}`
        })
        this.articleQR = data
      } catch (err) {
        console.log(err);
      }
    }
  },
})