
<script lang="ts">
    export let data = [] as any[];
    let regionWithScores: { [key: string]: any } = {};

    /*

    data.forEach((game) => {
        game.forEach((region) => {
            if (region['__EMPTY'] === 'HQ') {
                if (!regionWithScores[region['__EMPTY']]) {
                    regionWithScores[region['__EMPTY']] = {};
                }
                regionWithScores[region['__EMPTY']]['__EMPTY_1'] = region['__EMPTY_1'];
                regionWithScores[region['__EMPTY']]['__EMPTY_2'] = region['__EMPTY_2'];
                regionWithScores[region['__EMPTY']]['__EMPTY_3'] = region['__EMPTY_3'];
                regionWithScores[region['__EMPTY']]['__EMPTY_4'] = region['__EMPTY_4'];
            }
        });
    });

    const regionArray = Object.values(regionWithScores);

    regionArray.sort((a, b) => calculateTotalScore(b) - calculateTotalScore(a));

    console.log(regionArray);



    function calculateTotalScore(row: any) {
        return parseInt(row['__EMPTY_1']) * 4 + parseInt(row['__EMPTY_2']) * 3 + parseInt(row['__EMPTY_3']) * 2 + parseInt(row['__EMPTY_4']) * 1;
    }

    */
</script>




