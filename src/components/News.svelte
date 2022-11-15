<script>
    export let data;

    let hasImage = data.attributes.media.data ? true : false;
</script>

<div class="item" class:image={hasImage}>
    {#if hasImage}
        <div class="image-wrapper">
            <img src={data.attributes.media.data[0].attributes.formats.small.url} alt="" />
        </div>
    {/if}
    <div class="content">
        <h1>
            <a href={`news/${data.attributes.slug}`}>{data.attributes.title}</a>
        </h1>
        <p>
            {data.attributes.description}
        </p>
    </div>
</div>

<style lang="scss">
    .item {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        background-color: wheat;
        padding: 1rem 3rem;

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
