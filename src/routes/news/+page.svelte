<script>
    import Main from '$lib/components/Main.svelte';
    import Section from '$lib/components/Section.svelte';
    import qs from 'qs';
    import PaginationWrapper from '$lib/components/PaginationWrapper.svelte';

    const querry = qs.stringify({
        fields: ['title', 'description', 'slug'],
        populate: 'media',
    });

    const params = {
        fetchURL: 'https://forbgkids-cms.herokuapp.com/api/posts',
        querry: querry,
        targetEndpoint: 'news',
        title: 'Новини',
    };
</script>

<svelte:head>
    <title>Новини</title>
</svelte:head>

<Main>
    <Section>
        <PaginationWrapper {params} />
    </Section>
</Main>
