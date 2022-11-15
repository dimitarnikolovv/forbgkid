<script>
    export let clr = 'white';
</script>

<section style="background-color: {clr};">
    <div class="container {clr === 'white' ? 'text-dark' : 'text-light'}">
        <slot />
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        min-height: 110vh;
    }

    :global(div.text-light) {
        color: #17252a;
    }
    div.container {
        z-index: 1;
        display: flex;
        flex-direction: column;
        max-width: 95%;
        max-height: 80%;
        padding-block: 5rem;
        background-color: transparent;

        @media only screen and (max-width: 968px) {
            padding: 1rem;
        }
    }
</style>
