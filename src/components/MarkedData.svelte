<script>
    import { marked } from 'marked';
    export let markedData = {
        title: '',
        content: '',
        date: '',
        media: { data: false },
    };
</script>

<div class="wrapper">
    <h1>{markedData.title}</h1>
    {#if markedData.date} <span>{markedData.date.toLocaleString('bg-BG')}</span> {/if}

    <div class="content">
        {@html marked(markedData.content)}
        {#if markedData.media.data}
            <div class="images">
                {#each markedData.media.data as image}
                    <img
                        class="fullscreen-image"
                        src={image.attributes.url}
                        alt={image.attributes.alternativeText}
                    />
                {/each}
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    .wrapper {
        max-width: 60rem;
        margin-inline: auto;

        .images {
            display: flex;
            flex-wrap: wrap;
        }
        .content {
            img.fullscreen-image {
                max-width: 80vw;
                margin-block: 1rem;
                margin-inline: 1rem;
                float: none;
            }
        }
    }

    .wrapper :global(.content img) {
        max-width: 40%;
        max-height: 300px;
        margin-block-end: 1rem;
        margin-inline-start: 1rem;
        display: block;
        float: right;
        border-radius: 10px;
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

    .wrapper :global(ul li) {
        background-image: url('/icons/check-mark-24x24.svg');
        background-repeat: no-repeat;
        padding-inline-start: 32px;
    }

    .wrapper :global(table) {
        margin-block: 3rem;
    }
</style>
