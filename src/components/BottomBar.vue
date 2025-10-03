<script setup>
	import { ref, onMounted } from "vue"
	import logoUrl from "../../public/asserts/images/watch.png"
	import favoriteIcone from "../../public/asserts/images/favorie.png"
	import comingIcone from "../../public/asserts/images/coming.png"
	import discoverIcone from "../../public/asserts/images/discover.png"
	import reglageIcone from "../../public/asserts/images/reglage.png"
	import logoutIcone from "../../public/asserts/images/logout.png"
	import rechercherIcone from "../../public/asserts/images/rechercher.png"
	import profileIcone from "../../public/asserts/images/profile.jpg"
</script>
<template>
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
        <router-link to="/discover" class="flex flex-col items-center text-sm">
        <img :src="discoverIcone" class="w-6 h-6" />
        Découvrir
        </router-link>
      </div>
    </div>
</template>