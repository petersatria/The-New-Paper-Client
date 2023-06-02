import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('article', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    articles: [],
    article: {}
  }),
  getters: {

  },
  actions: {
    async fetchArticles(size, page) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/api/articles?page[size]=${size}`
        })
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
        console.log(data.data, 'apa');
        this.article = data.data
      } catch (err) {
        //route
        console.log(err);
      }
    }
  },
})