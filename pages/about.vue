<template>
	<div>
		<h2>About</h2>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem numquam ipsam aperiam nam
			minus, accusamus in quisquam ab neque?
		</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem numquam ipsam aperiam nam
			minus, accusamus in quisquam ab neque?
		</p>

		{{ data }}
	</div>
</template>

<script setup>
	// const { data } = await useFetch('/api/ninja?name=vero') // GET method
	// const { data } = await useFetch('/api/ninja?name=vero', {
	// 	method: 'post',
	// 	body: { age: 25 }
	// })
	// POST method

	const { data } = await useFetch("/api/currency/IDR")
</script>

<style scoped>
	h2 {
		margin-bottom: 20px;
		font-size: 36px;
		font-weight: 600;
	}

	p {
		margin: 20px;
	}
</style>
