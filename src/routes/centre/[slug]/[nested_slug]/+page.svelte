<script>
    import { page } from '$app/stores';
    import MarkedData from '../../../../components/MarkedData.svelte';
    export let data;

    let nested_subpage;
    $: data.centre.nested_subpage.forEach((sp) => {
        if (sp.id == $page.params.slug) nested_subpage = sp;
    });
    let subpage;
    $: nested_subpage.subpage.forEach((sp) => {
        if (sp.slug === $page.params.nested_slug) subpage = sp;
    });
</script>

<svelte:head>
    <title>{subpage.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        title: subpage.title,
        content: subpage.content,
        media: { data: subpage.fullscreen_media.data },
        // media: { data: false },
    }}
/>
