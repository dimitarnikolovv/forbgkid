<script>
    import { scrollY } from '../stores';
    import Nav from './Nav.svelte';
    import Logo from './icons/Logo.svelte';

    $: onScroll = $scrollY > 100;
</script>

<header id="app-head" class:fixed={onScroll}>
    <div class="container">
        <Logo />
        <Nav />
    </div>
</header>

<style lang="scss">
    header {
        z-index: 10;
        position: fixed;
        top: 0;
        width: 100vw;
        min-height: 3rem;
        padding-block: 1rem;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: saturate(50%) blur(4px);

        div.container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 6rem;
            max-width: 90%;
            margin-inline: auto;
            @media only screen and (max-width: 768px) {
                height: 3rem;
            }
        }
    }
    header.fixed {
        box-shadow: 0 3px 10px rgba(118, 118, 118, 0.1);
        .container {
            height: 3rem;
        }
    }
</style>
