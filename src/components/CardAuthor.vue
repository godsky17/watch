<script setup>
defineProps({
  actor: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <div
      class="relative bg-no-repeat bg-center bg-cover rounded-[10px] w-full aspect-[174/231]"
      :style="{
        backgroundImage: actor.profile_path
          ? `url(https://image.tmdb.org/t/p/w300${actor.profile_path})`
          : 'url(/fallback.jpg)' // image par défaut si pas de photo
      }"
    >
    </div>

    <div class="mt-5">
      <h2 class="text-xl font-bold">{{ actor.name }}</h2>
      <p class="text-sm text-gray-400">{{ actor.character }}</p>
    </div>
  </div>
</template>
