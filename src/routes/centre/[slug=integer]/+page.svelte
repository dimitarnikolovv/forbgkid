<script>
    import { page } from '$app/stores';
    import MarkedData from '$lib/components/MarkedData.svelte';
    export let data;

    let subpage;
    $: data.centre.sub_pages.data.forEach((sp) => {
        if (sp.id == $page.params.slug) subpage = sp;
    });
</script>

<svelte:head>
    <title>{subpage.attributes.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        title: subpage.attributes.title,
        content: subpage.attributes.content,
        media: { data: subpage.attributes.fullscreen_media.data },
    }}
/>
