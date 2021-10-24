<script lang="ts">
	import Error from './components/error.svelte';
	import Loading from './components/loading.svelte';
	import Success from './components/success.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { unsubscribeResultStore } from './store/unsubscribe-result';
	import { getToken } from './helpers';

	onMount(() => {
		unsubscribeResultStore.unsubscribe(getToken());
	});

	let display: 'error' | 'loading' | 'success';

	const unsubscribe = unsubscribeResultStore.subscribe((state) => {
		if (state.isLoading) {
			display = 'loading';
		} else if (state.error !== undefined) {
			display = 'error';
		} else {
			display = 'success';
		}
	})

	onDestroy(unsubscribe);
</script>

<main>
	<div class="flex-container">
		{#if display === 'loading'}
			<Loading />
		{:else if display === 'error'}
			<Error />
		{:else}
			<Success />
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		height: 100%;
		padding: 16px;

		.flex-container {
			align-items: center;
			display: flex;
			height: 100%;
			justify-content: center;
		}
	}
</style>