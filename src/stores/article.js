import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('article', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    articles: [],
    article: {},
    articleQR: '',
    latestArticle: [],
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
    categories: []
  }),
  getters: {

  },
  actions: {
    async fetchArticles(size, page, filter) {
      try {
        let url = this.baseUrl + `/api/articles?page[size]=${size}`
        if (page) {
          url = this.baseUrl + `/api/articles?page[size]=${size}&page[number]=${page}`
        }
        if (filter) {
          url = this.baseUrl + `/api/articles?page[size]=${size}&page[number]=${page}&filter[category]=${filter}`
        }
        const { data } = await axios({ url })
        // if (size === 3) {
        //   this.latestArticles = data.data.rows
        // } else {
        // }
        this.articles = data.data.rows
        this.currentPage = data.currentPage
        this.totalItems = data.totalItems
        this.totalPages = data.totalPages
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
    },
    async fetchCategories() {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/api/categories`
        })
        this.categories = data.data
      } catch (err) {
        console.log(err);
      }
    },
  },
})