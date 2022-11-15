<script>
    import Section from '../../../components/Section.svelte';
    import { marked } from 'marked';
    export let data;
    let dateCreated = new Date(data.post.createdAt);
</script>

<Section>
    <div class="wrapper">
        <h1>{data.post.title}</h1>
        <span>{dateCreated.toLocaleString('bg-BG')}</span>

        <div class="content">
            {#if data.post.media.data}
                <img
                    src={data.post.media.data.attributes.url}
                    alt={data.post.media.data.attributes.alternativeText}
                />
            {/if}

            {@html marked(data.post.content)}
        </div>
    </div>
</Section>

<style lang="scss">
    .wrapper {
        margin-inline: auto;
        max-width: 60rem;
        img {
            max-width: 40%;
            margin-block-end: 1rem;
            margin-inline-start: 1rem;
            display: block;
            float: right;
            border-radius: 10px;
        }
    }

    .wrapper :global(a) {
        font-weight: 500;
        font-style: italic;
        color: rgb(41, 76, 174);

        background-image: linear-gradient(90deg, rgba(38, 58, 130, 0.771), rgb(57, 70, 152));
        background-size: 0% 2px;
        background-repeat: no-repeat;
        background-position: left bottom;

        transition: background-size 200ms ease-in-out;
    }

    .wrapper :global(a):hover {
        background-size: 100% 2px;
    }

    .wrapper :global(li) {
        background-image: url('/icons/check-mark-24x24.svg');
        background-repeat: no-repeat;
        padding-inline-start: 32px;
    }
</style>
