<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import ArrowSlide from './icons/ArrowSlide.svelte';

    const carouselSlides = [
        {
            link: '/images/desk.png',
            title: 'Евродеск вече и в Бургас',
            page: '/',
        },
        {
            link: '/images/it_2022.jpg',
            title: 'VII областна олимпиада по информатика',
            page: '/',
        },
        {
            link: '/images/talents.jpeg',
            title: 'Кампания "Шанс за таланта на Бургас"',
            page: '/',
        },
        {
            link: '/images/math_test.jpg',
            title: 'IV-ти математически турнир за деца от предучилищна възраст "Многознайко"',
            page: '/',
        },
        {
            link: '/images/literature.png',
            title: 'VIII национален литературен конкурс на тема "Когато утре стане днес"',
            page: '/',
        },
    ];

    const options = {
        rewind: true,
        gap: '1rem',
        autoplay: true,
        arrows: true,
        autoHeight: true,
        autoWidth: true,
        type: 'loop',
        padding: '20%',
    };
</script>

<Splide {options} hasTrack={false}>
    <div style="position: relative">
        <SplideTrack>
            {#each carouselSlides as slide}
                <SplideSlide>
                    <img src={slide.link} alt={slide.title} />
                    <div class="slide-title">
                        <a href={slide.page}>{slide.title}</a>
                    </div>
                </SplideSlide>
            {/each}
        </SplideTrack>

        <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev"
                ><ArrowSlide direction="left" /></button
            >
            <button class="splide__arrow splide__arrow--next"
                ><ArrowSlide direction="right" /></button
            >
        </div>
    </div>

    <div class="splide__progress">
        <div class="splide__progress__bar" />
    </div>
</Splide>

<style lang="scss">
    .slide-title {
        height: fit-content;
        display: flex;
        justify-content: center;
        margin-block: 0.5rem;
        a {
            margin-inline: auto;
            font-size: large;
            color: white;
        }
    }
    .splide__arrow {
        width: 3rem;
        height: 3rem;
        background-color: transparent;
        opacity: 1;
        z-index: 3;
        &::after {
            content: '';
            z-index: -1;
            position: absolute;
            display: block;
            top: -290%;
            height: 680%;
            width: 1000%;

            @media only screen and (max-width: 1020px) {
                background: none !important;
            }
        }

        &--prev {
            left: 4rem;
            &::after {
                background: linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 1) 30%,
                    rgba(255, 255, 255, 0) 100%
                );
            }
        }
        &--next {
            right: 4rem;
            &::after {
                background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 70%);
            }
        }
    }

    img {
        @media only screen and (max-width: 1000px) {
            width: 40rem;
        }

        @media only screen and (max-width: 640px) {
            width: 28rem;
        }
        @media only screen and (max-width: 450px) {
            width: 20rem;
        }
    }
</style>
