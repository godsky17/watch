<script setup>
import etoileIcone from "../../public/asserts/images/etoile.png"
import {ref, watch, onMounted} from 'vue'
defineProps({
	similarMovie: {
		type: Object,
		required: true
	}
})
</script>
<template>
	<router-link :to="`/details/${similarMovie.id}`">
		<div class="flex align-middle px-3 py-5 gap-3">
			<div 
				class="rounded-[10px] min-w-[80px] h-[101px] bg-no-repeat bg-center bg-cover"
					:style="{
				backgroundImage: `url(https://image.tmdb.org/t/p/w300${similarMovie.backdrop_path})`
				?? 'url(/fallback.jpg)' // image par défaut si pas de photo
				}"
				>
			</div>
			<div>
				<h3 class="text-[15px]">{{ (similarMovie.title).slice(0,30) }} {{ similarMovie.title.length > 30 ? "..." : " " }}</h3>
				<p>Horreur, Action</p>
				<div class="mt-5 flex align-middle gap-1">
					<img :src="etoileIcone" width=10>
					<img :src="etoileIcone" width=10>
					<img :src="etoileIcone" width=10>
					<img :src="etoileIcone" width=10>
				</div>
			</div>
		</div>
  	</router-link>
</template>

