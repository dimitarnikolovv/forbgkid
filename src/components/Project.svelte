<script>
    import { fly } from 'svelte/transition';

    export let name = '';
    export let id = '';
</script>

<div in:fly={{ x: 100, duration: 200, delay: 300 }} out:fly={{ x: -400, duration: 200 }}>
    <h1>{name}</h1>
    <div>
        <p>Съдържание на проект с ID {id}</p>
        <slot />
    </div>
</div>

<style lang="scss">
    h1 {
        line-height: 1.2em;
    }
</style>
