<script>
    import Section from '../../../components/Section.svelte';

    export let data;
</script>

<Section>
    <h1>{data.post.title}</h1>

    {@html data.post.content}
</Section>
