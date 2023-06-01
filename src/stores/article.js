import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('article', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    articles: []
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
    }
  },
})