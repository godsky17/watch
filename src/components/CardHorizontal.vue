<script setup>
import etoileIcone from "../../public/asserts/images/etoile.png"
defineProps({
	similarMovie: {
		type: Object,
		required: true
	}
})
</script>
<template>
	<route-link :to="`/details/${similarMovie.id}`">
<div class="flex align-middle px-6 py-5 gap-4">
	<div 
		class="rounded-[10px] w-[113px] h-[101px] bg-no-repeat bg-center bg-cover"
			:style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/w300${similarMovie.backdrop_path})`
          ?? 'url(/fallback.jpg)' // image par défaut si pas de photo
      	}"
		>
	</div>
	<div>
		<h3>{{ similarMovie.title }}</h3>
		<p>Horreur, Action</p>
		<div class="mt-5 flex align-middle gap-1">
			<img :src="etoileIcone" width=20>
			<img :src="etoileIcone" width=20>
			<img :src="etoileIcone" width=20>
			<img :src="etoileIcone" width=20>
		</div>
	</div>
</div>
  	
  </route-link>
</template>

