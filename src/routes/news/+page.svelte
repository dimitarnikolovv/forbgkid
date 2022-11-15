<script>
    /** @type {import('./$types').PageData} */
    import Main from '../../components/Main.svelte';
    import Section from '../../components/Section.svelte';
    import News from '../../components/News.svelte';

    export let data;
</script>

<Main>
    <Section>
        <div class="news-wrapper">
            {#each data.posts as post}
                <News data={post} />
            {/each}
        </div>
    </Section>
</Main>

<style lang="scss">
    div.news-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding-inline: 10%;
    }
</style>
