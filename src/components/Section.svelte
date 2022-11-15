<script>
    export let clr = 'white';
    export let cp = '';
</script>

<section>
    <div class="background" style="background: {clr}; clip-path: {cp};" />
    <div class="container {clr === 'white' ? 'text-dark' : 'text-light'}">
        <slot />
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        position: relative;
        // width: 100vw;
        min-height: 110vh;
    }

    div.background {
        z-index: 0;
        width: 100%;
        height: 100%;
        position: absolute;
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
