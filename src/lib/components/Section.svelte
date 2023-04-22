<script>
    export let clr = 'white';
</script>

<section style="background-color: {clr};" class={clr === 'white' ? 'text-dark' : 'text-light'}>
    <slot />
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        min-height: 110vh;
        min-width: 60vw;
        max-width: 60rem;
    }

    :global(div.text-light) {
        color: #17252a;
    }
</style>
