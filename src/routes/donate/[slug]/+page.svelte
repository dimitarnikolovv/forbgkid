<script>
    import { page } from '$app/stores';
    import MarkedData from '../../../components/MarkedData.svelte';

    export let data;

    let subpage;
    $: data.donate.sub_pages.data.forEach((sp) => {
        if (sp.attributes.slug === $page.params.slug) subpage = sp;
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
