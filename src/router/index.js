import {createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import FilmDetails from '@/views/filmdetails.vue'
import Categories from '@/views/categories.vue'
import FilmsCat from '@/views/category/films.vue'
import SeriesCat from '@/views/category/series.vue'
import TvShowCat from '@/views/category/tvshows.vue'
import Search from '@/views/Search.vue'
import Discover from '@/views/discover.vue'

const routes = [
	{path: '/', component: Home},
	{path: '/details/:id', name: 'MovieDetails', component: FilmDetails},
	{path: '/category/films', component: FilmsCat},
	{path: '/category/series', component: SeriesCat},
	{path: '/category/tv-shows', component: TvShowCat},
	{ path: "/search", name: "search", component: Search},
	{ path: "/discover", name: "discover", component: Discover},
]

const router = createRouter({
	history: createWebHistory(), routes
})

export default router