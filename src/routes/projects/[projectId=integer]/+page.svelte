<script>
    import { marked } from 'marked';
    export let data;
</script>

<svelte:head>
    <title>{data.project.attributes.title}</title>
</svelte:head>

<div>
    {@html marked(data.project.attributes.content)}
</div>
