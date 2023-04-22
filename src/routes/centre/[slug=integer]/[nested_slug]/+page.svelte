<script>
    import { page } from '$app/stores';
    import MarkedData from '$lib/components/MarkedData.svelte';
    export let data;

    let subpage;
    $: data.centre.sub_pages.data.forEach((sp) => {
        if (sp.id == $page.params.slug) subpage = sp;
    });

    let nested_page;
    $: subpage.attributes.nested_pages.data.forEach((np) => {
        if (np.attributes.slug === $page.params.nested_slug) nested_page = np;
    });
</script>

<svelte:head>
    <title>{nested_page.attributes.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        title: nested_page.attributes.title,
        content: nested_page.attributes.content,
        media: { data: nested_page.attributes.fullscreen_media.data },
    }}
/>
