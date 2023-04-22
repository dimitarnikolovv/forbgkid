<script>
    import { scrollY } from '$lib/stores';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
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
        position: relative;
        margin-top: 8rem;
        @media only screen and (max-width: 768px) {
            margin-top: 5rem;
        }
    }
</style>
