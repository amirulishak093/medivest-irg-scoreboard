
<script lang="ts">
    export let data = [] as any[];
    let regionWithScores: []


    data.forEach((game) => {
        console.log(game)

/*
        if (game['__EMPTY'] === 'HQ') {
            regionWithScores.push({'__EMPTY_1': })
        } */

    
    })


    function calculateTotalScore(row: any) {
        return parseInt(row['__EMPTY_1']) * 4 + parseInt(row['__EMPTY_2']) * 3 + parseInt(row['__EMPTY_3']) * 2 + parseInt(row['__EMPTY_4']) * 1;
    }

</script>




