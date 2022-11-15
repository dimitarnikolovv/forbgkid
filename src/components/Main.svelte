<script>
    import { fly } from 'svelte/transition';
</script>

<main in:fly={{ x: 4000, duration: 500, delay: 200 }} out:fly={{ x: -20, duration: 300 }}>
    <slot />
</main>
