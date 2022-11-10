<script>
    import { scrollY } from '../stores';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import '../app.css';

    let mainWrap;
</script>

<div
    bind:this={mainWrap}
    on:scroll={() => {
        $scrollY = mainWrap.scrollTop;
    }}
>
    <Header />

    <slot />

    <Footer />
</div>

<style>
    div {
        max-height: 100vh;
        overflow: hidden scroll;
    }
</style>
