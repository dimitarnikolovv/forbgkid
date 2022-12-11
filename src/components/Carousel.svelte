<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import ArrowSlide from './icons/ArrowSlide.svelte';
    import { fly } from 'svelte/transition';

    export let slides = {
        name: '',
        url: '',
        caption: '',
        alternativeText: '',
    };

    const options = {
        rewind: true,
        gap: '1rem',
        autoplay: true,
        arrows: true,
        autoHeight: true,
        autoWidth: true,
        type: 'loop',
        perPage: 3,
        perMove: 1,
        pagination: false,
        focus: 'center',
    };
</script>

<Splide {options} hasTrack={false}>
    <div in:fly={{ x: 4000, duration: 400, delay: 300 }} out:fly={{ x: -1000, duration: 300 }}>
        <div style="position: relative">
            <SplideTrack>
                {#each slides as slide}
                    <SplideSlide>
                        <img
                            class="image-wh"
                            src={slide.attributes.url}
                            alt={slide.attributes.alternativeText}
                        />
                        <div class="slide-title">
                            <a href={slide.attributes.name}>{slide.attributes.caption}</a>
                        </div>
                    </SplideSlide>
                {/each}
            </SplideTrack>

            <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev">
                    <ArrowSlide direction="left" />
                </button>
                <button class="splide__arrow splide__arrow--next">
                    <ArrowSlide direction="right" />
                </button>
                <div class="background background--left" />
                <div class="background background--right" />
            </div>
        </div>

        <div class="splide__progress">
            <div class="splide__progress__bar" />
        </div>
    </div>
</Splide>

<style lang="scss">
    :global(.splide) {
        background-color: white;
    }
    .slide-title {
        height: fit-content;
        display: flex;
        justify-content: center;
        margin-block: 0.5rem;
        a {
            margin-inline: auto;
            font-size: large;
            color: black;
        }
    }
    .splide__arrow {
        width: 3rem;
        height: 3rem;
        background-color: transparent;
        opacity: 1;
        &--prev {
            left: 4rem;
            @media only screen and (max-width: 860px) {
                left: 0.6rem;
            }

            @media only screen and (max-width: 430px) {
                left: -0.6rem;
            }
        }
        &--next {
            right: 4rem;
            @media only screen and (max-width: 860px) {
                right: 0.6rem;
            }

            @media only screen and (max-width: 430px) {
                right: -0.6rem;
            }
        }
    }

    .background {
        height: 100%;
        width: 15%;
        position: absolute;
        top: 0;
        @media only screen and (max-width: 1020px) {
            background: none !important;
        }

        &--left {
            left: 0;
            background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
        }

        &--right {
            right: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
        }
    }

    img,
    a {
        max-width: 100vw;
        @media only screen and (max-width: 1000px) {
            width: 40rem;
        }

        @media only screen and (max-width: 640px) {
            width: 28rem;
        }
        @media only screen and (max-width: 450px) {
            width: 90vw;
        }
    }
</style>
