<script>
    /** @type {import('./$types').PageData} */
    import Main from '../../components/Main.svelte';
    import Section from '../../components/Section.svelte';

    export let data;
</script>

<Main>
    <Section>
        {#each data.posts as post}
            <h1><a href={`news/${post.id}`}>{post.attributes.title}</a></h1>
            <p>
                {post.attributes.description}
            </p>
        {/each}
    </Section>
</Main>
