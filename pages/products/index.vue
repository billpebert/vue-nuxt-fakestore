<template>
	<div>
		<div class="grid grid-cols-4 gap-4">
			<div v-for="product in products">
				<!-- <NuxtLink :to="`/products/${product.id}`">
					{{ product.title }}
				</NuxtLink> -->
				<ProductCard :product="product" />
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "products",
});

useHead({
	title: 'Nuxt Dojo | Merch',
	meta: [
		{
			name: 'description',
			content: 'Test Products'
		}
	]
})

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
