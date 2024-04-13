import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import CreateRecipesView from "@/views/CreateRecipesView.vue"
import FavoritesView from "@/views/FavoritesView.vue"
import ProductsPageView from "@/views/ProductsPageView.vue"
import JournalPageView from "@/views/JournalPageView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateRecipesView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  },
  {
    path: '/products',
    name: 'productsPage',
    component: ProductsPageView
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalPageView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
