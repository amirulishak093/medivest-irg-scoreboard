<script lang="ts">
    export let data = [] as any[];

    let regionSums = {};

    function calculateRegionSums(data) {
      data.forEach((entry) => {
        const region = entry['__EMPTY'];
        if (!regionSums[region]) {
          regionSums[region] = {
            '__EMPTY': region,
            '__EMPTY_1': 0,
            '__EMPTY_2': 0,
            '__EMPTY_3': 0,
            '__EMPTY_4': 0,
            'totalScore': 0,
          };
        }

        for (let i = 1; i <= 4; i++) {
          const attributeName = `__EMPTY_${i}`;
          const attributeValue = parseInt(entry[attributeName]);
          regionSums[region][attributeName] += attributeValue;
          regionSums[region]['totalScore'] += attributeValue * (5 - i); // Calculate total score
        }
      });

      return regionSums;
    }

    calculateRegionSums(data);
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
      {#each Object.values(regionSums).sort((a, b) => b.totalScore - a.totalScore) as row, index}
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
          <td class="font-bold"> {row.totalScore} </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>




