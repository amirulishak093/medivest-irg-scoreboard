
<script lang="ts">
    export let data = [] as any[]

    console.log(data)

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



