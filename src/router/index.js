import {createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import FilmDetails from '@/views/filmdetails.vue'
import Categories from '@/views/categories.vue'

const routes = [
	{path: '/', component: Home},
	{path: '/details', component: FilmDetails},
	{path: '/categories', component: Categories},
]

const router = createRouter({
	history: createWebHistory(), routes
})

export default router