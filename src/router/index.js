import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Role from '../views/Role.vue'
import User from '../views/User.vue'
import Category from '../views/Category.vue'
import SubCategory from '../views/SubCategory.vue'
import Post from '../views/Post.vue'
import Banner from '../views/Banner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/roles',
    name:'Role',
    component: Role
  },
  {
    path: '/users',
    name:'User',
    component: User
  },
  {
    path: '/categories',
    name:'Category',
    component: Category
  },
  {
    path: '/posts',
    name:'Post',
    component: Post
  },
  {
    path: '/subcategories',
    name:'SubCategory',
    component: SubCategory
  },
  {
    path: '/banners',
    name:'Banner',
    component: Banner
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
