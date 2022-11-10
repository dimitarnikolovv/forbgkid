<script>
    import { scrollY } from '../stores';
    import Nav from './Nav.svelte';
    import Logo from './icons/Logo.svelte';

    $: onScroll = $scrollY > 180;
</script>

<header id="app-head" class:fixed={onScroll}>
    <div class="container">
        <Logo {onScroll} />
        <Nav {onScroll} />
    </div>
</header>

<style lang="scss">
    header {
        position: sticky;
        top: 0;
        z-index: 10;
        width: 100vw;
        padding-block: 1rem;
        background-color: rgba(0, 0, 0, 0.85);
        div.container {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 6rem;
            max-width: 90vw;
            margin-inline: auto;
            transition: height 200ms;
        }
    }
    header.fixed {
        .container {
            height: 2rem;
        }
    }
</style>
