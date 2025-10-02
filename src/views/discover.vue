<script setup>
import { ref, onMounted } from "vue"
import CardMovie from "@/components/CardMovie.vue"
import CardHorizontal from "@/components/CardHorizontal.vue"
import NavBar from "@/components/NavBar.vue"
import BottomBar from "@/components/BottomBar.vue"
import SideBar from "@/components/SideBar.vue"


const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

const discoverList = ref([])
const popularMovies = ref([])

async function fetchDiscoverList() {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=1`
    )
    const data = await response.json()
    discoverList.value = data.results
    console.error("Data:", discoverList.value)
  } catch (error) {
    console.error("Erreur lors du fetch des films :", error)
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
  fetchDiscoverList()
  fetchPopularMovies()
})
</script>

<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-5 bg-black text-white relative">
    <SideBar />

    <div class="col-span-1 md:col-span-4 p-4 pb-20 md:pb-4">
      <NavBar />

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="md:col-span-3">
          <h1 class="text-red-800 text-4xl sm:text-5xl font-bold mb-5">Discover</h1>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <CardMovie v-for="movie in discoverList" :key="i" :movie="movie" />
          </div>
        </div>

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

    <BottomBar />
  </div>
</template>
