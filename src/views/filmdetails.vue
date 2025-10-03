<script setup>
import { ref, onMounted, computed } from "vue"
import { useRoute } from 'vue-router'
import CardMovie from "@/components/CardMovie.vue"
import CardAuthor from "@/components/CardAuthor.vue"
import CardHorizontal from "@/components/CardHorizontal.vue"
import Commentaire from "@/components/Commentaire.vue"
import NavBar from "@/components/NavBar.vue"
import BottomBar from "@/components/BottomBar.vue"
import SideBar from "@/components/SideBar.vue"

const showMenu = ref(false)
const route = useRoute()
const movieId = route.params.id
const movie = ref(null)
const loading = ref(true)
const error = ref(null)
const actors = ref([])
const similarMovies = ref([])
const typeMovie = route.params.type ? route.params.type : "movie"

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

async function fetchMovieDetails() {
  if (!movieId) return
  loading.value = true
  try {
    // Lancer les 3 appels en parallèle
    const [detailsRes, creditsRes, similarRes] = await Promise.all([
      fetch(`${BASE_URL}/${typeMovie}/${movieId}?api_key=${API_KEY}&language=fr-FR`),
      fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=fr-FR`),
      fetch(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=fr-FR`)
    ])

    if (!detailsRes.ok || !creditsRes.ok || !similarRes.ok) {
      throw new Error("Erreur API")
    }


    // Parser les réponses
    const detailsData = await detailsRes.json()
    const creditsData = await creditsRes.json()
    const similarData = await similarRes.json()

    // Stocker dans les refs
    movie.value = detailsData
    actors.value = creditsData.cast
    similarMovies.value = similarData.results

  } catch (err) {
    console.error("Erreur fetch movie details :", err)
    error.value = "Impossible de charger les données du film."
  } finally {
    loading.value = false
  }
}


onMounted(fetchMovieDetails)
</script>

<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-5 bg-black text-white relative">
    <SideBar />

    <!-- Main content -->
    <div class="col-span-1 md:col-span-4 p-4 pb-20 md:pb-4">
      <!-- Navigation bar -->
      <NavBar />

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Left (Main) -->
        <div class="md:col-span-3">
          
          <!-- Chargement -->
          <div v-if="loading" class="text-center py-10 text-gray-400">
            Chargement en cours...
          </div>

          <div v-else-if="error" class="text-center py-10 text-red-500">
            {{ error }}
          </div>

          <div v-else-if="movie" >
            <div class="rounded-lg mb-5 bg-opacity-20 flex align-middle justify-start min-h-[50vh] bg-cover bg-no-repeat" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }">
              <div class="w-full myBg p-5">
                <div class="my-auto">
                  <h1 class="text-4xl sm:text-5xl md:text-7xl mb-5">{{ movie.title || movie.name }}</h1>
                  <p v-if="movie.tagline" class="mb-3 text-lg sm:text-xl">{{ movie.tagline }}</p>
                  <p class="max-w-[368px] pb-5 text-sm sm:text-base">{{ movie.overview }}</p>
                </div>
              </div>
            </div>

            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Acteurs</h1>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <CardAuthor
                v-for="actor in actors.slice(0,5)"
                :key="actor.id"
                :actor="actor"
              />
            </div>

            <!-- Commentaires -->
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-5">Commentaire</h1>
            <div class="space-y-4">
              <form class="flex flex-col gap-3">
                <textarea class="w-full bg-stone-800 rounded-lg p-3 text-sm placeholder-gray-400" placeholder="Écrire un commentaire..."></textarea>
                <button type="submit" class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium">Envoyer</button>
              </form>
              <div class="space-y-3">
               
              </div>
            </div>
          </div>
        </div>

        <!-- Right (Sidebar content) -->
        <div class="md:col-span-1 mt-10 md:mt-0">
          <h2 class="text-red-100 text-[20px] font-bold p-2">Populaire</h2>
          <CardHorizontal 
            v-for="similarMovie in similarMovies.slice(0,5)"
            :key="similarMovie.id"
            :similarMovie="similarMovie" 
          />
        </div>
      </div>
    </div>

    <!-- Mobile bottom nav -->
    <BottomBar />
  </div>
</template>

<style>
.myBg{
  background-color: black;
  opacity: 50%;
}
</style>
