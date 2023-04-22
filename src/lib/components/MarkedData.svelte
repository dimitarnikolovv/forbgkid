<script>
    import { marked } from 'marked';
    import Button from '$lib/components/Button.svelte';

    export let markedData = {
        title: '',
        content: '',
        date: '',
        media: { data: false },
        button: { text: '', link: '' },
    };
</script>

<div class="wrapper">
    {#if markedData.title}<h1>{markedData.title}</h1>{/if}
    {#if markedData.date} <span>{markedData.date.toLocaleString('bg-BG')}</span> {/if}

    <div class="content">
        {@html marked(markedData.content)}
        {#if markedData.media.data}
            {#each markedData.media.data as image}
                <div class="images">
                    <img
                        class="fullscreen-image"
                        src={image.attributes.url}
                        alt={image.attributes.alternativeText}
                    />
                </div>
            {/each}
        {/if}
    </div>

    {#if markedData.button}<Button params={markedData.button} />{/if}
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .images {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .content {
        div.images {
            min-height: 30vh;
        }
        img.fullscreen-image {
            max-width: 100%;
            max-height: unset;
            height: unset;
            margin-block: 2rem;
            margin-inline: 1rem;
            float: none;
        }
    }

    :global(.wrapper .content img) {
        display: block;
        float: right;
        max-width: 24vw;
        max-height: 35vh;
        // width: fit-content;
        height: fit-content;
        object-fit: cover;
        margin-block: 1rem;
        margin-inline-start: 1rem;
        border-radius: 10px;

        @media only screen and (max-width: 768px) {
            max-width: 38vw;
            max-height: 40vh;
        }
    }

    :global(.wrapper .content a) {
        font-weight: 500;
        font-style: italic;
        color: rgb(41, 76, 174);

        background-image: linear-gradient(90deg, rgba(38, 58, 130, 0.771), rgb(57, 70, 152));
        background-size: 0% 2px;
        background-repeat: no-repeat;
        background-position: left bottom;

        transition: background-size 200ms ease-in-out;
    }

    :global(.wrapper .content a):hover {
        background-size: 100% 2px;
    }

    :global(.wrapper .content ul li) {
        background-image: url('/icons/check-mark-24x24.svg');
        background-repeat: no-repeat;
        padding-inline-start: 32px;
        max-width: 100%;
    }

    :global(.wrapper .content ul) {
        display: inline;
    }

    :global(.wrapper .content table) {
        margin-block: 3rem;
    }
</style>
