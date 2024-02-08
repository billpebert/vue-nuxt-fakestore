<template>
	<div class="mt-7 max-w-sm mx-auto text-center bg-white rounded-md shadow p-4">
		<p class="mt-7 text-7xl font-bold text-slate-800">
			{{ error.statusCode }}
		</p>
		<p class="mt-7 font-4xl text-slate-500">Oops</p>
		<p class="mt-7 font-2xl text-slate-500 mb-10">
			{{ error.message }}
		</p>

    <button type="button" class="py-3 px-6 text-white font-bold bg-green-500 rounded-md" @click="handleClearError">
      Go Home
    </button>
	</div>
</template>

<script setup>
defineProps(["error"]);
const handleClearError = () => clearError({
  redirect: '/'
})
</script>

<style lang="scss" scoped></style>
