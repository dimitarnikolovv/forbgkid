<script>
    import { onMount } from 'svelte';
    import Nav from './Nav.svelte';
    import Logo from './icons/Logo.svelte';

    let onScroll = false;
    function handleOnScroll() {
        const scroll = window.scrollY;

        onScroll = scroll > 180 ? true : false;
    }

    onMount(() => {
        window.addEventListener('scroll', handleOnScroll);
    });
</script>

<header id="app-head" class:fixed={onScroll}>
    <div class="container">
        <Logo onScroll={onScroll ? true : false} />
        <Nav onScroll={onScroll ? true : false} />
    </div>
</header>

<style lang="scss">
    header {
        width: 100vw;
        padding-block: 1rem;
        background-color: transparent;
        div.container {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 6rem;
            max-width: 90vw;
            margin-inline: auto;
        }
    }

    header.fixed {
        z-index: 10;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.75);
        animation: headerSlideDown 200ms ease-in-out;
        .container {
            height: 2rem;
        }
    }

    @keyframes headerSlideDown {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
