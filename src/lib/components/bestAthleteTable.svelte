<script lang="ts">
    export let data = [] as any[]

    data.sort((a, b) => calculateTotalScore(b) - calculateTotalScore(a));

    function calculateTotalScore(row: any) {
      return parseInt(row['__EMPTY_1'])
    }

</script>


<div class="overflow-x-auto mt-4">
  <table class="bg-white table">
 
    <thead>
      <tr>
        <th />
        <th>Region</th>
        <th>Player</th>
        <th>Total Points</th>
      </tr>
    </thead>

    <tbody>
      {#each data as row, index}
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
          <td>{row['__EMPTY_1']}</td>
          <td class="font-bold"> {calculateTotalScore(row)} </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>


