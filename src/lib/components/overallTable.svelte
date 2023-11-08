
<script lang="ts">
    export let data = [] as any[];

    let regionSums = {};
    
    function calculateRegionSums(data) {
      
      data.forEach((entry) => {
        const region = entry['__EMPTY'];
        if (!regionSums[region]) {
          regionSums[region] = {
            '__EMPTY_1': 0,
            '__EMPTY_2': 0,
            '__EMPTY_3': 0,
            '__EMPTY_4': 0,
          };
        }
    
        for (let i = 1; i <= 4; i++) {
          const attributeName = `__EMPTY_${i}`;
          regionSums[region][attributeName] += entry[attributeName];
        }
      });
    
      return regionSums;
    }

    calculateRegionSums(data)

    function calculateTotalScore(row: any) {
      return parseInt(row['__EMPTY_1']) * 4 + parseInt(row['__EMPTY_2']) * 3  + parseInt(row['__EMPTY_3']) * 2  + parseInt(row['__EMPTY_4']) * 1 
    }

</script>

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
      {#each Object.values(regionSums).sort((a, b) => calculateTotalScore(b) - calculateTotalScore(a)) as row, index}
        <tr class={index === 0 ? "active" : ""}>
          <th>{index + 1}</th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                 
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




