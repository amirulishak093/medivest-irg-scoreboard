<script lang="ts">
    export let data = [] as any[]

    $: currentData = data;

    $: {
	if (currentData) {
  		currentData.sort((a, b) => calculateTotalScore(b) - calculateTotalScore(a));

	}

    }

  

    function calculateTotalScore(row: any) {
      return parseInt(row['__EMPTY_1']) + parseInt(row['__EMPTY_2']) + parseInt(row['__EMPTY_3']);
    }

</script>

{#if currentData[0]["__EMPTY_1"] !== 0 || currentData[0]["__EMPTY_2"] !== 0 || currentData[0]["__EMPTY_3"] !== 0}
<div class="overflow-x-auto mt-4">
  <table class="bg-white table">
    <thead>
      <tr>
        <th />
        <th>Region</th>
    <th>Rank</th>
      <th>Score </th>
      </tr>
    </thead>

    <tbody>
      {#each currentData as row, index}
        <tr class={index === 0 ? "active" : ""}>
          <th>{index + 1}</th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img
                            src={'logo-' + row['__EMPTY'].toLowerCase().replace(/\s+/g, '-') + '.png'}
                            alt={row['__EMPTY']}
                        />
                    </div>
              </div>
              <div>
                <div>{row['__EMPTY']}</div>
              </div>
            </div>
          </td>
          <td class="text-center"> 
			{#if index === 0}
				<img
				  class="w-6 h-6"
				  src="gold-medal.svg"
				  alt="Gold Medal"
				/>
			  {:else if index === 1}
				<img
				  class="w-6 h-6"
				  src="silver-medal.svg"
				  alt="Silver Medal"
				/>
			  {:else if index == 2}
				<img
				  class="w-6 h-6"
				  src="bronze-medal.svg"
				  alt="Bronze Medal"
				/>
			  {:else if index == 3}
				<img
				  class="w-6 h-6"
				  src="last-medal.svg"
				  alt="Last Medal"
				/>
			  {/if}

          </td>
          <td class="font-bold">{calculateTotalScore(row)}%</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
{:else}
<div class="flex justify-center text-center text-slate-500">
Not updated yet
</div>
{/if}

