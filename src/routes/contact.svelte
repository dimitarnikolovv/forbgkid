<script context="module">
    import { browser } from '$app/env';
    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;
</script>

<script>
    import Main from '../components/Main.svelte';
</script>

<svelte:head>
    <title>Контакти</title>
</svelte:head>

<Main />

<style lang="scss">
</style>
