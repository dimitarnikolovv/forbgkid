<script>
    import qs from 'qs';
    import { fly } from 'svelte/transition';
    import PaginationWrapper from '../../../components/PaginationWrapper.svelte';

    const querry = qs.stringify({
        fields: ['title', 'description'],
        populate: 'media',
    });

    const params = {
        fetchURL: 'https://forbgkids-cms.herokuapp.com/api/projects',
        querry: querry,
        targetEndpoint: 'projects',
        title: 'Проекти',
    };
</script>

<svelte:head>
    <title>Проекти</title>
</svelte:head>

<div in:fly={{ x: 100, duration: 200, delay: 300 }} out:fly={{ x: -400, duration: 200 }}>
    <PaginationWrapper {params} />
</div>

<style lang="scss">
</style>
