<script setup>
import { ref } from "vue"
import logoUrl from "../../public/asserts/images/watch.png"
import favoriteIcone from "../../public/asserts/images/favorie.png"
import comingIcone from "../../public/asserts/images/coming.png"
import discoverIcone from "../../public/asserts/images/discover.png"
import reglageIcone from "../../public/asserts/images/reglage.png"
import logoutIcone from "../../public/asserts/images/logout.png"
import rechercherIcone from "../../public/asserts/images/rechercher.png"
import profileIcone from "../../public/asserts/images/profile.jpg"
import CardMovie from "@/components/CardMovie.vue"
import CardHorizontal from "@/components/CardHorizontal.vue"

const showMenu = ref(false)
</script>

<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-5 bg-black text-white">
    <!-- Sidebar desktop -->
    <div class="hidden md:block md:col-span-1 border-r border-gray-800">
      <div class="pt-10 pl-5">
        <router-link to="/"><img :src="logoUrl" /></router-link>
      </div>

      <ul class="list-none">
        <li class="text-[20px] mb-5 ml-5 mt-10">Menu</li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <router-link to="/" class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0,0,256,256">
              <g fill="#ffffff">
                <g transform="scale(10.66667,10.66667)">
                  <path d="M12,2.09961l-11,9.90039h3v9h6v-6h4v6h6v-9h3z"></path>
                </g>
              </g>
            </svg>
            <p>Home</p>
          </router-link>
        </li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="favoriteIcone" width="25" />
          <p>Favories</p>
        </li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="comingIcone" width="25" />
          <p>Coming soon</p>
        </li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="discoverIcone" width="25" />
          <p>Découvrir</p>
        </li>

        <li class="text-[20px] mb-5 ml-5 mt-10">Général</li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="reglageIcone" width="25" />
          <p>Réglages</p>
        </li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="logoutIcone" width="25" />
          <p>Déconnexion</p>
        </li>
      </ul>
    </div>

    <!-- Main content -->
    <div class="col-span-1 md:col-span-4 p-4">
      <!-- Navigation bar -->
      <nav class="flex items-center justify-between gap-4 mb-6 relative">
        <!-- Bouton menu mobile -->
        <button @click="showMenu = !showMenu" class="md:hidden p-2 rounded bg-stone-700 hover:bg-stone-600">
          ☰
        </button>

        <!-- Menu contextuel mobile -->
        <transition name="fade">
          <ul v-if="showMenu" class="absolute top-12 left-0 bg-stone-800 rounded-lg shadow-lg p-4 flex flex-col gap-4 w-48 z-50 md:hidden">
            <li class="text-[18px] cursor-pointer hover:text-red-500"><router-link to="/details">Films</router-link></li>
            <li class="text-[18px] cursor-pointer hover:text-red-500">Séries</li>
            <li class="text-[18px] cursor-pointer hover:text-red-500">TV Show</li>
            <li class="text-[18px] cursor-pointer hover:text-red-500">Animées</li>
          </ul>
        </transition>

        <!-- Navigation links desktop -->
        <ul class="hidden md:flex gap-8">
          <li class="text-[18px] cursor-pointer hover:text-red-500"><router-link to="/details">Films</router-link></li>
          <li class="text-[18px] cursor-pointer hover:text-red-500">Séries</li>
          <li class="text-[18px] cursor-pointer hover:text-red-500">TV Show</li>
          <li class="text-[18px] cursor-pointer hover:text-red-500">Animées</li>
        </ul>

        <!-- Search bar -->
        <div class="flex items-center gap-2 bg-stone-600 rounded-lg px-3 py-2 w-full sm:w-auto max-w-xs">
          <img :src="rechercherIcone" width="20" />
          <input type="text" placeholder="Rechercher..." class="bg-transparent outline-none text-sm w-full placeholder-white" />
        </div>

        <!-- Profile image -->
        <div>
          <img class="rounded-full w-[40px] h-[40px]" :src="profileIcone" />
        </div>
      </nav>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Left (Main) -->
        <div class="md:col-span-3">
          <h1 class="text-red-800 text-4xl sm:text-5xl font-bold mb-5">Categories</h1>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <CardMovie v-for="i in 24" :key="i" />
          </div>
        </div>

        <!-- Right (Sidebar content) -->
        <div class="md:col-span-1 mt-10 md:mt-0">
          <h2 class="text-red-100 text-[20px] font-bold p-2">Populaire</h2>
          <CardHorizontal />
          <CardHorizontal />
          <CardHorizontal />
          <CardHorizontal />
        </div>
      </div>
    </div>

   
    <!-- Bottom nav mobile -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-stone-900 border-t border-gray-800 flex justify-around py-2 z-50">
      <router-link to="/" class="flex flex-col items-center text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9-1.5 1.5L12 5.5 4.5 13.5z"/><path d="M4 10v10h6v-6h4v6h6V10"/></svg>
        Home
      </router-link>
      <div class="flex flex-col items-center text-sm">
        <img :src="favoriteIcone" class="w-6 h-6" />
        Favories
      </div>
      <div class="flex flex-col items-center text-sm">
        <img :src="comingIcone" class="w-6 h-6" />
        Coming
      </div>
      <div class="flex flex-col items-center text-sm">
        <img :src="discoverIcone" class="w-6 h-6" />
        Découvrir
      </div>
    </div>
  </div>
</template>
