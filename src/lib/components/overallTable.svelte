
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

    console.log(calculateRegionSums(data))

</script>




