<script>
    export let clr = 'white';
    export let cp = '';
    export let mediaSmall = false;
</script>

<section>
    <div
        id={mediaSmall ? 'mediaSmall' : ''}
        class="background"
        style="background: {clr}; clip-path: {cp};"
    />
    <div class="container {clr === 'white' ? 'text-dark' : 'text-light'}">
        <slot />
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        position: relative;
        width: 100vw;
        height: 120vh;

        :global(#mediaSmall) {
            @media only screen and (max-width: 350px) {
                height: 80vh;
            }
            @media only screen and (max-width: 450px) {
                height: 90vh;
            }
        }
    }

    div.background {
        z-index: 0;
        width: 100vw;
        height: 120vh;
        position: absolute;
    }

    :global(div.text-light) {
        color: #17252a;
    }
    div.container {
        z-index: 1;
        display: flex;
        flex-direction: column;
        width: 90vw;
        max-width: 95%;
        max-height: 80%;
        padding-block: 5rem;
        background-color: transparent;

        @media only screen and (max-width: 768px) {
            padding-block-start: 1rem;
        }
    }
</style>
