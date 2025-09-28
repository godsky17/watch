<template>
	<div class="w-full px-3 py-5 bg-stone-600 rounded-[10px] my-4">
	    <div class="self-end sm:self-auto flex align-middle gap-5 mb-2">
	      <img class="rounded-full w-[40px] h-[40px]" :src="profileIcone" />
	      <h3 class="font-bold text-[25px]">Ben SAMOUD</h3>
	    </div>
	    <p>Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  	</div>
</template>

<script setup>
	import profileIcone from "../../public/asserts/images/profile.jpg"
</script>