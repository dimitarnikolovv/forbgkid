<script>
    import { fly } from 'svelte/transition';
</script>

<main in:fly={{ x: 4000, duration: 300, delay: 150 }} out:fly={{ x: -1000, duration: 300 }}>
    <slot />
</main>

<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        gap: 3rem;
        padding-block: 3rem;
        padding-inline: 2.5rem;
        background-color: white;

        @media only screen and (max-width: 1080px) {
            flex-direction: column;
        }

        @media only screen and (max-width: 968px) {
            padding: 1rem;
        }
    }
</style>
