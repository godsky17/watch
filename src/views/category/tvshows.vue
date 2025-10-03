<script setup>
import { ref, onMounted } from "vue"
import logoUrl from "../../../public/asserts/images/watch.png"
import favoriteIcone from "../../../public/asserts/images/favorie.png"
import comingIcone from "../../../public/asserts/images/coming.png"
import discoverIcone from "../../../public/asserts/images/discover.png"
import reglageIcone from "../../../public/asserts/images/reglage.png"
import logoutIcone from "../../../public/asserts/images/logout.png"
import rechercherIcone from "../../../public/asserts/images/rechercher.png"
import profileIcone from "../../../public/asserts/images/profile.jpg"
import CardMovie from "@/components/CardMovie.vue"
import CardHorizontal from "@/components/CardHorizontal.vue"
import NavBar from "@/components/NavBar.vue"
import BottomBar from "@/components/BottomBar.vue"
import SideBar from "@/components/SideBar.vue"

const showMenu = ref(false)

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

const moviesList = ref([])
const popularMovies = ref([])
const tvShows = ref([])

async function fetchTvShows() {
  try {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=fr-FR&page=1`)
    const data = await response.json()
    tvShows.value = data.results
  } catch (error) {
    console.error("Erreur lors du fetch des TV Shows :", error)
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
  } catch (error) {
    console.error("Erreur lors du fetch des films populaires :", error)
  }
}

onMounted(() => {
  fetchTvShows()
  fetchPopularMovies()
})
</script>

<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-5 bg-black text-white relative">
    <!-- Sidebar (desktop) -->
    <SideBar />

    <!-- Main content -->
    <div class="col-span-1 md:col-span-4 p-4 pb-20 md:pb-4">
      <!-- Navigation bar -->
      <NavBar />

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Left (Main) -->
        <div class="md:col-span-3">
          <h1 class="text-red-800 text-4xl sm:text-5xl font-bold mb-5">Tv show</h1>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <CardMovie v-for="show in tvShows" :key="show.id" :movie="show" type="tv" />
          </div>
        </div>

        <!-- Right (Sidebar content) -->
        <div class="md:col-span-1 mt-10 md:mt-0">
          <h2 class="text-red-100 text-[20px] font-bold p-2">Populaire</h2>
          <CardHorizontal
            v-for="popularMovie in popularMovies.slice(0, 5)"
            :key="popularMovie.id"
            :similarMovie="popularMovie"
          />
        </div>
      </div>
    </div>

    <!-- Mobile bottom nav -->
    <BottomBar />
  </div>
</template>
