<script setup>
  defineProps({
    movie:{
      type: Object,
      required: true
    }
  });

  function reduceTitle(title){
    let newTitle = title.slice(0,15)
    return newTitle
  }
</script>

<template>
<router-link :to="`/details/${movie.id}`">
<div class="relative rounded-[10px] w-full aspect-[174/231] bg-no-repeat bg-center bg-cover"
  :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }">
  <div class="bg-black bg-opacity-70 p-2 absolute bottom-0 left-0 w-full rounded-b-[8px] text-white text-sm sm:text-base">
    <h3>{{ reduceTitle(movie.title || movie.original_title || movie.name || movie.original_name) }}</h3>
  </div>
</div>
</router-link>
</template>