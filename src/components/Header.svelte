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
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100vw;
        padding-block: 1rem;
        background-color: rgba(0, 0, 0, 0.85);
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
        .container {
            height: 3rem;
        }
    }
</style>
