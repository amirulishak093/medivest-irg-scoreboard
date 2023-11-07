<script lang="ts">
    import { read, utils } from "xlsx";
    import Tab from '$lib/components/tab.svelte';
    import Table from '$lib/components/table.svelte';
    import { page } from '$lib/store';
    import { onMount } from 'svelte';

    export let data

    let tableTennisData = []
    let badmintonData = []
    let netballData = []
    let bowlingData = []
    let carromData = []
    let footballData = []
    let medivestGotTalentData = []
    let esportData = []

    onMount(async () => {
	    const f = await (await fetch(data.currentFilepath)).arrayBuffer();
	    const wb = read(f);
	
	    tableTennisData = utils.sheet_to_json(wb.Sheets['TABLE TENNIS']).slice(1);
	   badmintonData = utils.sheet_to_json(wb.Sheets['BADMINTON']).slice(1);
	   netballData = utils.sheet_to_json(wb.Sheets['NETBALL']).slice(1);
	   bowlingData = utils.sheet_to_json(wb.Sheets['BOWLING']).slice(1);
	   carromData = utils.sheet_to_json(wb.Sheets['CARROM']).slice(1);
	   footballData = utils.sheet_to_json(wb.Sheets['FOOTBALL']).slice(1);
	   medivestGotTalentData = utils.sheet_to_json(wb.Sheets['MEDIVEST GOT TALENT']).slice(1);
	   esportData = utils.sheet_to_json(wb.Sheets['E-SPORT']).slice(1);
     })


</script>


<div class="flex justify-center tabs">
	<Tab index={0} name="Table Tennis" />
	<Tab index={1} name="Badminton" />
	<Tab index={2} name="Netball" />
	<Tab index={3} name="Bowling" />
	<Tab index={4} name="Carrom" />
	<Tab index={5} name="Football" />
	<Tab index={6} name="Medivest Got Talent" />
	<Tab index={7} name="E-Sport" />
</div>

<div class="mt-8">
	{#if data}
		{#if $page === 0}
		    <Table data={tableTennisData} />
		{:else if $page === 1}
		    <Table data={badmintonData} />
		{:else if $page === 2}
		    <Table data={netballData} />
		{:else if $page === 3}
		    <Table data={bowlingData} />	
		{:else if $page === 4}
		    <Table data={carromData} />
		{:else if $page === 5}
		    <Table data={footballData} />
		{:else if $page === 6}
		    <Table data={medivestGotTalentData} />
		{:else if $page === 7}
		    <Table data={esportData} />
		{/if}
	{:else}
	    <div class="flex items-center justify-center text-gray-500">
	      No data is provided
	    </div>
	{/if}

</div>

