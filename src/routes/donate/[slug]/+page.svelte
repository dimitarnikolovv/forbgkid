<script>
    import { page } from '$app/stores';
    import { slide } from 'svelte/transition';
    import MarkedData from '../../../components/MarkedData.svelte';

    export let data;

    let subpage;
    $: data.donate.sub_pages.data.forEach((sp) => {
        if (sp.attributes.slug === $page.params.slug) subpage = sp;
    });
</script>

<svelte:head>
    <title>{subpage.title}</title>
</svelte:head>
<div in:slide={{ duration: 200, delay: 300 }} out:slide={{ duration: 200 }}>
    <MarkedData
        markedData={{
            title: subpage.attributes.title,
            content: subpage.attributes.content,
            media: { data: subpage.attributes.fullscreen_media.data },
        }}
    />
</div>
