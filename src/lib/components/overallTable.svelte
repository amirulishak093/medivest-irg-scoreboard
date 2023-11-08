
<script lang="ts">
    export let data = [] as any[]

   let regionWithScores = []

    if (data) {
      data.forEach((game) => {
        game.forEach((region) => {
          if (region['__EMPTY'] === 'HQ') {
            regionWithScores.push({
              region: 'HQ',
              __EMPTY_1: parseInt(region['__EMPTY_1']),
              __EMPTY_2: parseInt(region['__EMPTY_2']),
              __EMPTY_3: parseInt(region['__EMPTY_3']),
              __EMPTY_4: parseInt(region['__EMPTY_4']),
            });
          }
        });
      });
    
      // regionWithScores.sort((a, b) => calculateTotalScore(b) - calculateTotalScore(a));
    
   
    }

     console.log(regionWithScores);


    function calculateTotalScore(row: any) {
      return parseInt(row['__EMPTY_1']) * 4 + parseInt(row['__EMPTY_2']) * 3  + parseInt(row['__EMPTY_3']) * 2  + parseInt(row['__EMPTY_4']) * 1 
    } 

</script>

/*
<div class="overflow-x-auto mt-4">
  <table class="bg-white table">
 
    <thead>
      <tr>
        <th />
        <th>Region</th>
        <th class="text-center">
          <div class="flex justify-center items-center">
            <img class="w-6 h-6" src="/gold-medal.svg" alt="Gold Medal" />
          </div>
        </th>
        <th class="text-center">
          <div class="flex justify-center items-center">
            <img class="w-6 h-6" src="/silver-medal.svg" alt="Silver Medal" />
          </div>
        </th>
        <th class="text-center">
          <div class="flex justify-center items-center">
            <img class="w-6 h-6" src="/bronze-medal.svg" alt="Bronze Medal" />
          </div>
        </th>
        <th class="text-center">
          <div class="flex justify-center items-center">
            <img
              class="w-6 h-6"
              src="/last-medal.svg"
              alt="Last Place Medal"
            />
          </div>
        </th>
        <th> Points </th>
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
          <td class="text-center"> {row['__EMPTY_1']} </td>
          <td class="text-center"> {row['__EMPTY_2']} </td>
          <td class="text-center"> {row['__EMPTY_3']} </td>
          <td class="text-center"> {row['__EMPTY_4']} </td>
          <td class="font-bold"> {calculateTotalScore(row)} </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
*/

