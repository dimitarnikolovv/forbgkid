<script>
    import { scrollY } from '../stores';
    import Header from '../components/Header.svelte';
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
        @media only screen and (max-width: 768px) {
            margin-top: 5rem;
        }
    }
</style>
