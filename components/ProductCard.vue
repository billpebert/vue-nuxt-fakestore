<template>
	<div class="bg-white shadow-md p-3 rounded-xl">
		<img :src="product.image" :alt="`product.title`" class="object-cover rounded-xl h-[180px] w-full shadow" />
		<p class="font-bold text-gray-5 my-4 truncate">
			{{ product.title }}
		</p>
		<NuxtLink :to="`/products/${product.id}`">
			<p class="py-3 px-6 bg-green-500 rounded font-semibold text-white text-center">View Details</p>
		</NuxtLink>
	</div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
