<script setup>
import { ref, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
/* LES COMPOSANTS */
import CardMovie from "@/components/CardMovie.vue"
import CardHorizontal from "@/components/CardHorizontal.vue"
import NavBar from "@/components/NavBar.vue"
import BottomBar from "@/components/BottomBar.vue"
/* LES VARIAVLES */
const showMenu = ref(false)
const API_KEY = "6a5223b1d5405b9dd581c9b784335c55"
const BASE_URL = "https://api.themoviedb.org/3"
const popularMovies = ref([])

const route = useRoute()
const results = ref([])

async function fetchSearch(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=fr-FR&query=${encodeURIComponent(query)}&page=1`
    )
    const data = await response.json()
    results.value = data.results
  } catch (error) {
    console.error("Erreur lors de la recherche :", error)
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
  if (route.query.q) {fetchSearch(route.query.q)}  
  fetchPopularMovies()
}

)

watch(() => route.query.q, (newQ) => {
  if (newQ) fetchSearch(newQ)
})
</script>

<template>
  


    <div class="min-h-screen grid grid-cols-1 md:grid-cols-5 bg-black text-white relative">
    <div class="hidden md:block md:col-span-1 border-r border-gray-800">
      <div class="pt-10 pl-5">
        <router-link to="/"><img :src="logoUrl" /></router-link>
      </div>
      <ul class="list-none">
        <li class="text-[20px] mb-5 ml-5 mt-10">Menu</li>
        <li class="flex items-center px-5 py-2 gap-3 text-[18px] cursor-pointer hover:bg-red-700">
          <router-link to="/" class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0,0,256,256">
              <g fill="#ffffff"><g transform="scale(10.66667,10.66667)"><path d="M12,2.09961l-11,9.90039h3v9h6v-6h4v6h6v-9h3z"/></g></g>
            </svg>
            <p>Home</p>
          </router-link>
        </li>
        <li class="flex items-center px-5 py-2 gap-3 text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="favoriteIcone" width="25" />
          <p>Favories</p>
        </li>
        <li class="flex items-center px-5 py-2 gap-3 text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="comingIcone" width="25" />
          <p>Coming soon</p>
        </li>
        <li class="flex items-center px-5 py-2 gap-3 text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="discoverIcone" width="25" />
          <p>Découvrir</p>
        </li>
        <li class="text-[20px] mb-5 ml-5 mt-10">Général</li>
        <li class="flex items-center px-5 py-2 gap-3 text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="reglageIcone" width="25" />
          <p>Réglages</p>
        </li>
        <li class="flex items-center px-5 py-2 gap-3 text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="logoutIcone" width="25" />
          <p>Déconnexion</p>
        </li>
      </ul>
    </div>

    <div class="col-span-1 md:col-span-4 p-4 pb-20 md:pb-4">
      <NavBar />
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="md:col-span-3">
          <div class="p-5 text-white">
            <h1 class="text-2xl sm:text-3xl font-bold mb-5">Résultats pour "{{ route.query.q }}"</h1>

            <div v-if="results.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <CardMovie v-for="item in results" :key="item.id" :movie="item" />
            </div>
            <p v-else>Aucun résultat trouvé.</p>
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
