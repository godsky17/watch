<script setup>
import logoUrl from "../public/asserts/images/watch.png"
import favoriteIcone from "../public/asserts/images/favorie.png"
import comingIcone from "../public/asserts/images/coming.png"
import discoverIcone from "../public/asserts/images/discover.png"
import reglageIcone from "../public/asserts/images/reglage.png"
import logoutIcone from "../public/asserts/images/logout.png"
import rechercherIcone from "../public/asserts/images/rechercher.png"
import profileIcone from "../public/asserts/images/profile.jpg"
</script>

<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-5 bg-black text-white">
    <!-- Sidebar (hidden on mobile) -->
    <div class="hidden md:block md:col-span-1 border-r border-gray-800">
      <div class="pt-10 pl-5">
        <img :src="logoUrl" />
      </div>

      <ul class="list-none">
        <li class="text-[20px] mb-5 ml-5 mt-10">Menu</li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <a href="/filmdetails.vue" class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0,0,256,256">
              <g fill="#ffffff">
                <g transform="scale(10.66667,10.66667)">
                  <path d="M12,2.09961l-11,9.90039h3v9h6v-6h4v6h6v-9h3z"></path>
                </g>
              </g>
            </svg>
            <p>Home</p>
          </a>
        </li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="favoriteIcone" width="25" />
          <p>Favories</p>
        </li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="comingIcone" width="25" height="25" />
          <p>Coming soon</p>
        </li>

        <li class="flex items-center px-5 py-[10px] gap-[10px] text-[18px] cursor-pointer hover:bg-red-700">
          <img :src="discoverIcone" width="25" height="25" />
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
      <nav class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <!-- Navigation links -->
        <ul class="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <li class="text-[18px] cursor-pointer hover:text-red-500">Films</li>
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
        <div class="self-end sm:self-auto">
          <img class="rounded-full w-[40px] h-[40px]" :src="profileIcone" />
        </div>
      </nav>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Left (Main) -->
        <div class="md:col-span-3">
          <div class="bg-red-500 h-32 p-5 rounded-lg mb-5">
            hello
          </div>

          <!-- Section Nouveauté -->
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Nouveauté</h1>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <CardMovie v-for="i in 4" :key="i" />
          </div>

          <!-- Section Découvrir -->
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 mb-4">Découvrir</h1>
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
  </div>
</template>

<script>
  import CardMovie from "@/components/CardMovie.vue"
  import CardHorizontal from "@/components/CardHorizontal.vue"
</script>

<style scoped>
/* Tu peux ajouter des styles custom si besoin ici */
</style>
