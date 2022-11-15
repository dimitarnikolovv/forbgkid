<script>
    import { marked } from 'marked';
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

{@html marked(subpage.content)}
