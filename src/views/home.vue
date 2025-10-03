<script setup>
import { ref, onMounted } from "vue"
import CardMovie from "@/components/CardMovie.vue"
import CardHorizontal from "@/components/CardHorizontal.vue"
import NavBar from "@/components/NavBar.vue"
import BottomBar from "@/components/BottomBar.vue"
import SideBar from "@/components/SideBar.vue"

const showMenu = ref(false)

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL
const upcomingMovies = ref([])
const popularMovies = ref([])
const heroMovie = ref([])
const moviesList = ref([])
const tvShows = ref([])
const series = ref([])

async function fetchUpcomingMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=fr-FR&page=1`);
    const data = await response.json();
    upcomingMovies.value = data.results;
  } catch (error) {
    console.error("Erreur lors du fetch des films à venir :", error);
  }
}

async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`
    )
    if (!response.ok) throw new Error("Erreur API")

    const data = await response.json()
    // On garde seulement 6 films maximum
    popularMovies.value = data.results.slice(0, 6)
    heroMovie.value = {
      id: (data.results.slice(0, 1))[0].id,
      title: (data.results.slice(0, 1))[0].title,
      image : (data.results.slice(0, 1))[0].poster_path,
      description : ((data.results.slice(0, 1))[0].overview).slice(0, 350) + "[ . . .]"
    }
    console.log(heroMovie.value)
  } catch (error) {
    console.error("Erreur lors du fetch des films populaires :", error)
  }
}

async function fetchMoviesList() {
  try {
    const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=fr-FR&page=1`)
    const data = await response.json()
    moviesList.value = data.results
  } catch (error) {
    console.error("Erreur lors du fetch des films :", error)
  }
}

async function fetchTvShows() {
  try {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=fr-FR&page=1`)
    const data = await response.json()
    tvShows.value = data.results
  } catch (error) {
    console.error("Erreur lors du fetch des TV Shows :", error)
  }
}

async function fetchSeries() {
  try {
    const response = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`)
    const data = await response.json()
    series.value = data.results
  } catch (error) {
    console.error("Erreur lors du fetch des Séries :", error)
  }
}



onMounted(() => {
  fetchUpcomingMovies();
  fetchPopularMovies();
  fetchMoviesList();
  fetchTvShows();
  fetchSeries()
});
</script>

<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-5 bg-black text-white relative">
    <SideBar />

    <div class="col-span-1 md:col-span-4 p-4 pb-20 md:pb-4">
      <!-- Navigation bar -->
      <NavBar />
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Left (Main) -->
        <div class="md:col-span-3">
          <div class="rounded-lg mb-5 bg-opacity-20 flex align-middle justify-start" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${heroMovie.image})` }">
            <div class="w-full myBg p-5">
            <div class="my-auto">
              <h1 class="text-4xl sm:text-5xl md:text-7xl mb-1 font-bold">{{ heroMovie.title }}</h1>
              <p class="max-w-[568px] pb-5 text-sm sm:text-base">{{ heroMovie.description}}</p>
              <router-link :to="`/details/${heroMovie.id}`" class="bg-red-900 px-7 py-2">Regarder</router-link>
            </div>
            </div>
          </div>

          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Nouveauté</h1>
          <div v-if="upcomingMovies.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <CardMovie 
              v-for="movie in upcomingMovies" 
              :key="movie.id" 
              :movie="movie" 
            />
          </div>

          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Films récents</h1>
          <div v-if="moviesList.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <CardMovie 
                v-for="movie in moviesList.slice(0,12)" 
                :key="movie.id" 
                :movie="movie" 
              />
          </div>

          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 mb-4">TV Shows</h1>
          <div v-if="tvShows.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <CardMovie 
              v-for="show in tvShows.slice(0,12)" 
              :key="show.id" 
              :movie="show" 
              type="tv"
            />
          </div>

          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 mb-4">Séries</h1>
          <div v-if="series.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <CardMovie 
              v-for="s in series.slice(0,12)" 
              :key="s.id" 
              :movie="s" 
              type="tv" 
            />
          </div>
        </div>

        <div class="md:col-span-1 mt-10 md:mt-0">
          <h2 class="text-red-100 text-[20px] font-bold p-2">Populaire</h2>
          <CardHorizontal
            v-for="popularMovie in popularMovies.slice(0,5)"
            :key="popularMovie.id"
            :similarMovie="popularMovie" 
          />
        </div>
      </div>
    </div>
    <BottomBar />
  </div>
</template>


<style>
.myBg{
  background-color: black;
}
</style>