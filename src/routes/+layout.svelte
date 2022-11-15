<script>
    import { scrollY } from '../stores';
    import Header from '../components/Header.svelte';
    import Main from '../components/Main.svelte';
    import Footer from '../components/Footer.svelte';
    import '../app.css';

    export let data;
</script>

<svelte:window bind:scrollY={$scrollY} />

<Header />
<div class="wrap">
    <slot />

    <Footer content={data.homepage.footer.content} />
</div>

<style lang="scss">
    div.wrap {
        margin-top: 8rem;
    }
</style>
