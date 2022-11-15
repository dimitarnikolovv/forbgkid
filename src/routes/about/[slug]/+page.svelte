<script>
    import { page } from '$app/stores';
    import { slide } from 'svelte/transition';
    import MarkedData from '../../../components/MarkedData.svelte';

    export let data;

    let subpage;
    $: data.about.subpage.forEach((sp) => {
        if (sp.slug === $page.params.slug) subpage = sp;
    });
</script>

<svelte:head>
    <title>{subpage.title}</title>
</svelte:head>
<div in:slide={{ duration: 200, delay: 300 }} out:slide={{ duration: 200 }}>
    <MarkedData
        markedData={{
            title: subpage.title,
            content: subpage.content,
            // media: { data: subpage.media.data },
            media: { data: false },
        }}
    />
</div>
