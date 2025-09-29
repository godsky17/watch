import {createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import FilmDetails from '@/views/filmdetails.vue'
import Categories from '@/views/categories.vue'
import FilmsCat from '@/views/category/films.vue'
import SeriesCat from '@/views/category/series.vue'
import TvShowCat from '@/views/category/tvshows.vue'

const routes = [
	{path: '/', component: Home},
	{path: '/details/:id', name: 'MovieDetails', component: FilmDetails},
	{path: '/category/films', component: FilmsCat},
	{path: '/category/series', component: SeriesCat},
	{path: '/category/tv-shows', component: TvShowCat},
]

const router = createRouter({
	history: createWebHistory(), routes
})

export default router