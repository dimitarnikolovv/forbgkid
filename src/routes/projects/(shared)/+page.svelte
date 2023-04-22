<script>
    import qs from 'qs';

    import PaginationWrapper from '$lib/components/PaginationWrapper.svelte';

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

<PaginationWrapper {params} />
