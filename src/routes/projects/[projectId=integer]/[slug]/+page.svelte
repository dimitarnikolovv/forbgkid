<script>
    import MarkedData from '../../../../components/MarkedData.svelte';
    import { page } from '$app/stores';
    export let data;

    let subpage;
    $: data.project.attributes.subpage.forEach((sp) => {
        if (sp.slug === $page.params.slug) subpage = sp;
    });
</script>

<svelte:head>
    <title>{subpage.title}</title>
</svelte:head>

<MarkedData
    markedData={{
        subpage: true,
        title: subpage.title,
        content: subpage.content,
        // media: { data: subpage.media.data },
        media: { data: false },
    }}
/>
