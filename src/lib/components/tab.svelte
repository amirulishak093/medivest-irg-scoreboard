<script lang="ts">
    import { page } from '$lib/store'

    export let name = ''
    export let index = -1
</script>

<button
on:click={() => ($page = index)}
class="btn  btn-sm {$page === index && 'active'}">{name}</button
>
