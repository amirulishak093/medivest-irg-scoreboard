<script>
  import "../app.css";
  import '@fontsource/poppins';
  import '@fontsource/poppins/500.css';
  import '@fontsource/poppins/700.css';
	import { fade } from 'svelte/transition';
	import LoadingSpinner from '$lib/components/loadingSpinner.svelte';
	import { isLoading } from '$lib/store';
</script> 


<div class="w-full relative min-h-screen">
  <div class="max-w-[800px] mx-auto flex justify-center items-center p-4">
    <a href="https://www.medivest.com.my/"><img alt="IRG Logo" class="w-32" src="logo-irg.png" /></a>
  </div>

  <div class="w-full max-w-[800px] mx-auto px-4 pb-12">
    		{#if $isLoading}
			<LoadingSpinner />
		{:else}
			<div class="pb-8" transition:fade={{ delay: 150, duration: 150 }}>
				<slot />
			</div>
		{/if}
  </div>
</div>


