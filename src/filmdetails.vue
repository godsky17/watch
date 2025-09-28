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
  <div class="min-h-screen grid grid-cols-5 bg-black text-[white]">
    <!-- Sidebar -->
    <div class="col-span-1">
      <div class="pt-10 pl-5">
        <img :src="logoUrl" />
      </div>

      <div>
        <ul class="list-none">
          <li class="text-[20px] mb-5 ml-5 mt-10">Menu</li>

          <li class="flex align-middle px-5 py-[10px] gap-[10px] text-[25px] cursor-pointer hover:bg-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0,0,256,256">
              <g fill="#ffffff">
                <g transform="scale(10.66667,10.66667)">
                  <path d="M12,2.09961l-11,9.90039h3v9h6v-6h4v6h6v-9h3z"></path>
                </g>
              </g>
            </svg>
            <p>Home</p>
          </li>

          <li class="flex align-middle px-5 py-[10px] gap-[10px] text-[25px] cursor-pointer hover:bg-red-700">
            <img :src="favoriteIcone" width="35" />
            <p>Favories</p>
          </li>

          <li class="flex align-middle px-5 py-[10px] gap-[10px] text-[25px] cursor-pointer hover:bg-red-700">
            <img :src="comingIcone" width="35" height="35" />
            <p>Coming soon</p>
          </li>

          <li class="flex align-middle px-5 py-[10px] gap-[10px] text-[25px] cursor-pointer hover:bg-red-700">
            <img :src="discoverIcone" width="35" height="35" />
            <p>Decouvrir</p>
          </li>

          <li class="text-[20px] mb-5 ml-5 mt-15">General</li>

          <li class="flex align-middle px-5 py-[10px] gap-[10px] text-[25px] cursor-pointer hover:bg-red-700">
            <img :src="reglageIcone" width="35" />
            <p>Reglages</p>
          </li>

          <li class="flex align-middle px-5 py-[10px] gap-[10px] text-[25px] cursor-pointer hover:bg-red-700">
            <img :src="logoutIcone" width="35" />
            <p>Deconnection</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Main content -->
    <div class="col-span-4">
      <div class="p-5">
        <!-- Navigation bar -->
        <nav class="flex align-middle justify-between">
          <ul class="list-none flex align-middle gap-[30px]">
            <li class="text-[20px]">Films</li>
            <li class="text-[20px]">Series</li>
            <li class="text-[20px]">Tv show</li>
            <li class="text-[20px]">Animees</li>

            <li class="flex align-middle justify-center bg-stone-400 text-[white] p-2 rounded-lg mx-15">
              <img :src="rechercherIcone" width="25" />
              <input type="text" placeholder="Rechercher..." />
            </li>
          </ul>

          <div>
            <img class="rounded-full" :src="profileIcone" width="50" />
          </div>
        </nav>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
        <!-- Main section -->
        <div class="md:col-span-3">
          <div class="bg-red-500 h-100 p-5 rounded-lg mb-5">
            hello
          </div>

          <!-- Nouveaute Section -->
          <h1 class="text-3xl sm:text-4xl md:text-[47px] font-bold">Nouveaute</h1>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 gap-4">
            <CardMovie v-for="i in 4" :key="i" />
          </div>
        </div>

        <!-- Right Column -->
        <div class="md:col-span-1">
          <h2 class="text-red-100 text-[24px] text-bold p-[10px]">Populaire</h2>

          <!-- Card horizontal -->
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
/* Styles personnalisés ici */
</style>
