<script lang="ts">
    import { read, utils } from "xlsx";
    import Tab from '$lib/components/tab.svelte';
    import Table from '$lib/components/table.svelte';
    import { page } from '$lib/store';
    import { onMount } from 'svelte';

    export let data

    let tableTennisData = []
    let badmintonData = []

    onMount(async () => {
	    const f = await (await fetch(data.currentFilepath)).arrayBuffer();
	    const wb = read(f);
	
	    tableTennisData = utils.sheet_to_json(wb.Sheets['TABLE TENNIS']).slice(1);
	   badmintonData = utils.sheet_to_json(wb.Sheets['BADMINTON']).slice(1);
     })


</script>


<div class="flex justify-center tabs">
	<Tab index={0} name="Table Tennis" />
	<Tab index={1} name="Badminton" />
</div>

<div class="mt-8">
	{#if data}
		{#if $page === 0}
		    <Table data={tableTennisData} />
		{:else if $page === 1}
		    <Table data={badmintonData} />
		
		{/if}
	{:else}
	    <div class="flex items-center justify-center text-gray-500">
	      No data is provided
	    </div>
	{/if}

</div>

