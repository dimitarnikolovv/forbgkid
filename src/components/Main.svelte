<script>
    import { fly } from 'svelte/transition';
</script>

<main in:fly={{ x: 5000, duration: 600, delay: 200 }} out:fly={{ x: -20, duration: 400 }}>
    <slot />
</main>
