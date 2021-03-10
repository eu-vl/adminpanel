import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    roles: [],
    categories: [],
    subcategories: [],
    banners: [],
    posts: []
  },
  mutations: {
    SET_ROLES(state, roles) {
      state.roles = roles;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_SUB_CATEGORIES(state, subcategories) {
      state.subcategories = subcategories;
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_BANNERS(state, banners) {
      state.banners = banners;
    },
  },
  actions: {
    async GET_ROLES({ commit }) {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:8080/roles/getAll',
      });
      
      commit("SET_ROLES", JSON.parse(JSON.stringify(response.data)))
    },
    GET_USERS({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/users/getAll'
      }).then(function (response) {
        commit("SET_USERS", JSON.parse(JSON.stringify(response.data)))
      })
    },
    GET_CATEGORIES({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/categories/get'
      }).then(function (response) {
        commit("SET_CATEGORIES", JSON.parse(JSON.stringify(response.data)))
      })
    },
    GET_SUB_CATEGORIES({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/subcategories/get'
      }).then(function (response) {
        commit("SET_SUB_CATEGORIES", JSON.parse(JSON.stringify(response.data)))
      })
    },
    GET_POSTS({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/posts/get'
      }).then(function (response) {
        console.log(response)
        commit("SET_POSTS", JSON.parse(JSON.stringify(response.data)))
      })
    },
    GET_BANNERS({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/banners/get'
      }).then(function (response) {
        commit("SET_BANNERS", JSON.parse(JSON.stringify(response.data)))
      })
    },
    CREATE_POST(formData) {
      axios({
        method: 'post',
        url: 'http://localhost:8080/posts/add',
        data: {
          formData
        },
        headers: {
          'Content-Type': 'multipart/form-data'
      }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  getters: {
    getRoles(state) {
      if (state != null && state.roles != null) return state.roles;
    },
    getUsers(state) {
      if (state != null && state.users != null) return state.users;
    },
    getCategories(state) {
      let catName = []
      state.categories.forEach(c => catName.push(c.name))
      if (state != null && state.categories != null) return catName;
    }
  }
})
