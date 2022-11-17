<script>
    export let passedData;
    export let targetEndpoint = '';

    let hasImage = passedData.attributes.media?.data ? true : false;
</script>

<div class="item" class:image={hasImage}>
    {#if hasImage}
        <div class="image-wrapper">
            <img src={passedData.attributes.media.data[0].attributes.formats.small.url} alt="" />
        </div>
    {/if}
    <div class="content">
        <h1>
            <a
                href={`${targetEndpoint}/${
                    passedData.attributes.slug != undefined
                        ? passedData.attributes.slug
                        : passedData.id
                }`}>{passedData.attributes.title}</a
            >
        </h1>
        <p>
            {passedData.attributes.description}
        </p>
    </div>
</div>

<style lang="scss">
    .item {
        display: flex;
        align-items: center;
        gap: 1.8rem;
        background-color: wheat;
        box-shadow: 10px 11px 20px 10px rgba(97, 97, 97, 0.15);

        padding-block: 1rem;
        padding-inline: 2rem;

        &.image {
            .image-wrapper {
                width: 30%;
                img {
                    display: block;
                    width: 100%;
                }
            }

            .content {
                width: 70%;
            }
        }

        @media only screen and (max-width: 850px) {
            flex-direction: column;
            padding: 1.5rem;

            &.image {
                .image-wrapper {
                    width: 70%;
                }

                .content {
                    width: 100%;
                }
            }
        }
    }
</style>
