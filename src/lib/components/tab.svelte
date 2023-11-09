<script lang="ts">
    import { page } from '$lib/store'

    export let name = ''
    export let index = -1
</script>

<button
on:click={() => ($page = index)}
class="btn tab {$page === index && 'tab-active'}">{name}</button
>
