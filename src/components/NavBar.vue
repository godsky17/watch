<script setup>
	import {ref} from "vue"
	const showMenu = ref(false)
</script>
<template>
	<nav class="flex items-center justify-between mb-6">
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="showMenu = !showMenu" class="p-2 rounded-lg bg-stone-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <transition enter-active-class="transition ease-out duration-200" leave-active-class="transition ease-in duration-150">
            <div v-if="showMenu" class="absolute top-16 left-4 right-4 bg-stone-800 rounded-lg shadow-lg z-50">
              <ul class="flex flex-col gap-4 p-4">
                <li class="text-[18px] cursor-pointer hover:text-red-500"><router-link to="/category/films" exact>Films</router-link></li>
          <li class="text-[18px] cursor-pointer hover:text-red-500"><router-link to="/category/series" exact>Séries</router-link></li>
          <li class="text-[18px] cursor-pointer hover:text-red-500"><router-link to="/category/tv-shows" exact>TV Show</router-link></li>
              </ul>
            </div>
          </transition>
        </div>

        <!-- Desktop nav -->
        <ul class="hidden md:flex gap-8">
          <li class="text-[18px] cursor-pointer hover:text-red-500"><router-link to="/category/films" exact>Films</router-link></li>
          <li class="text-[18px] cursor-pointer hover:text-red-500"><router-link to="/category/series" exact>Séries</router-link></li>
          <li class="text-[18px] cursor-pointer hover:text-red-500"><router-link to="/category/tv-shows" exact>TV Show</router-link></li>
        </ul>

        <!-- Search -->
        <div class="flex items-center gap-2 bg-stone-600 rounded-lg px-3 py-2 w-full sm:w-auto max-w-xs">
          <img :src="rechercherIcone" width="20" />
          <input type="text" placeholder="Rechercher..." class="bg-transparent outline-none text-sm w-full placeholder-white" />
        </div>

        <!-- Profile -->
        <div class="hidden sm:block">
          <img class="rounded-full w-[40px] h-[40px]" :src="profileIcone" />
        </div>
      </nav>
</template>