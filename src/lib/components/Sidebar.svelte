<script>
    import Button from './Button.svelte';
    export let title = '';
    export let button = { text: '', link: '' };
</script>

<aside>
    <h1>{title}</h1>
    <nav>
        <ul>
            <slot />
        </ul>
    </nav>
    {#if button.text != ''}
        <Button params={button} />
    {/if}
</aside>

<style lang="scss">
    aside {
        z-index: 1;
        position: sticky;
        top: 10rem;
        width: 30%;
        min-width: 30%;
        height: fit-content;
        background-color: wheat;
        padding-block: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media only screen and (max-width: 1080px) {
            width: 100%;
        }
    }

    :global(aside ul li) {
        padding: 0.8rem;
    }

    :global(aside ul li a) {
        font-style: italic;
        font-weight: 300;
        background-image: linear-gradient(90deg, rgb(139, 138, 138), rgb(65, 65, 65));
        background-size: 0% 2px;
        background-repeat: no-repeat;
        background-position: left bottom;

        transition: background-size 300ms ease-in-out, font-weight 200ms ease;
    }

    :global(aside ul li a.active) {
        font-weight: 500;
    }

    :global(aside ul li a:hover) {
        background-size: 100% 2px;
    }
</style>
