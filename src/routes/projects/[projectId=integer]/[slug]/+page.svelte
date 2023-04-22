<script>
    import MarkedData from '$lib/components/MarkedData.svelte';
    import { page } from '$app/stores';
    export let data;

    let subpage;
    $: data.project.attributes.sub_pages.data.forEach((sp) => {
        if (sp.attributes.slug === $page.params.slug) subpage = sp;
    });
</script>

<svelte:head>
    <title>{subpage.attributes.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        subpage: true,
        title: subpage.attributes.title,
        content: subpage.attributes.content,
        media: { data: subpage.attributes.fullscreen_media.data },
    }}
/>
