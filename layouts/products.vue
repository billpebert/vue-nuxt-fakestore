<template>
	<div>
		<header class="max-w-screen-2xl px-5 mx-auto bg-white shadow py-5">
			<nav>
				<NuxtLink to="/"> NuxtDojo Merch </NuxtLink>
			</nav>
		</header>

		<div class="max-w-screen-2xl px-5 mx-auto py-10">
			<slot />
		</div>

		<div class="max-w-screen-2xl px-5 mx-auto bg-white shadow py-5 mt-10 border-t">
			<ul class="flex items-center gap-10">
				<li>
					<NuxtLink to="/"> Home </NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about"> About </NuxtLink>
				</li>
				<li>
					<NuxtLink to="/products"> Products </NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.router-link-active.router-link-exact-active {
	color: #22c55e;
	font-weight: 600;
}
</style>
