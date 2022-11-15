<script>
    import { marked } from 'marked';
    export let markedData = {
        title: '',
        content: '',
        date: '',
        media: { data: true },
    };
</script>

<div class="wrapper">
    <h1>{markedData.title}</h1>
    {#if markedData.date} <span>{markedData.date.toLocaleString('bg-BG')}</span> {/if}

    <div class="content">
        {#if markedData.media.data}
            <img
                src={markedData.media.data.attributes.url}
                alt={markedData.media.data.attributes.alternativeText}
            />
        {/if}

        {@html marked(markedData.content)}
    </div>
</div>

<style lang="scss">
    .wrapper {
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
