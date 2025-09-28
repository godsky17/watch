<script setup>
	import etoileIcone from "../../public/asserts/images/etoile.png"

</script>
<template>
<div class="flex align-middle px-6 py-5 gap-4">
	<div class="rounded-[10px] w-[113px] h-[101px] bg-[url(../public/asserts/images/profile.jpg)] bg-no-repeat bg-center bg-cover">
	</div>
	<div>
		<h3>Title of movie</h3>
		<p>Horreur, Action</p>
		<div class="mt-5 flex align-middle gap-1">
			<img :src="etoileIcone" width=20>
			<img :src="etoileIcone" width=20>
			<img :src="etoileIcone" width=20>
			<img :src="etoileIcone" width=20>
		</div>
	</div>
</div>
</template>

