<template>
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
        	<router-link to="/discover" class="flex items-center gap-3">
	          <img :src="discoverIcone" width="25" />
	          <p>Découvrir</p>
	        </router-link>
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
</template>

<script setup>
import logoUrl from "../../public/asserts/images/watch.png"
import favoriteIcone from "../../public/asserts/images/favorie.png"
import comingIcone from "../../public/asserts/images/coming.png"
import discoverIcone from "../../public/asserts/images/discover.png"
import reglageIcone from "../../public/asserts/images/reglage.png"
import logoutIcone from "../../public/asserts/images/logout.png"
import rechercherIcone from "../../public/asserts/images/rechercher.png"
import profileIcone from "../../public/asserts/images/profile.jpg"
</script>