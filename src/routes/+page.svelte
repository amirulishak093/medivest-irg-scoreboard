<script lang="ts">
      import { read, utils } from "xlsx";
	import Tab from '$lib/components/tab.svelte';
	import { page } from '$lib/store';
	import { onMount } from 'svelte';

    export let data

    onMount(async () => {
    const f = await (await fetch(data.currentFilepath)).arrayBuffer();
    const wb = read(f);

    let tableTennisData = utils.sheet_to_json(wb.Sheets['TABLE TENNIS']));
})


</script>

<div class="max-w-[800px] mx-auto px-4">
    <div class="flex justify-center tabs">
        <Tab index={0} name="Table Tennis" />
        <Tab index={1} name="Badminton" />
    </div>

    <div class="mt-8">
        {#if $page === 0}
            <Table data={tableTennisData} />

        {/if}
    </div>
</div>
