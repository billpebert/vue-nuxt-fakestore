<template>
	<div class="flex bg-white rounded-md shadow">
		<div class="w-2/12 rounded-md overflow-hidden p-4 flex-grow">
			<img :src="product.image" class="w-full h-[350px] object-contain" alt="" />
		</div>
		<div class="p-5 flex-shrink w-8/12">
			<h2 class="text-4xl mb-3 font-bold">{{ product.title }}</h2>
			<p class="text-xl font-normal">${{ product.price }}</p>
			<p class="text-xl font-bold mb-3">Product Description:</p>
			<p class="border-t text-base text-slate-700 py-5">
				{{ product.description }}
			</p>
			<button class="btn">
				<span class="material-symbols-outlined text-green-50">
				add_shopping_cart
				</span>
				<span>
					Add To Cart
				</span>
			</button>
		</div>
	</div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
