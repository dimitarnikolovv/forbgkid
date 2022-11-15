<script>
    import { page } from '$app/stores';
    import MarkedData from '../../../components/MarkedData.svelte';
    export let data;

    let nested_subpage;
    $: data.centre.nested_subpage.forEach((sp) => {
        if (sp.id == $page.params.slug) nested_subpage = sp;
    });
</script>

<svelte:head>
    <title>{nested_subpage.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        title: nested_subpage.title,
        content: nested_subpage.content,
        media: { data: nested_subpage.fullscreen_media.data },
        // media: { data: false },
    }}
/>
