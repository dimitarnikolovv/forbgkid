<script>
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

    let step = 0;
</script>

<div class="carousel-wrap">
    <div
        class="faded faded-left"
        on:click={() => {
            step < 127 ? (step += 63.5) : '';
        }}
    >
        <ArrowSlide direction="left" />
    </div>
    <div
        class="faded faded-right"
        on:click={() => {
            step > -127 ? (step -= 63.5) : '';
        }}
    >
        <ArrowSlide direction="right" />
    </div>
    <ul id="carousel" style="transform: translate({step}rem)">
        {#each carouselSlides as slide}
            <li class="carousel--item">
                <img src={slide.link} alt={slide.title} />
                <div class="carousel--item-title">
                    <a href={slide.page}>{slide.title}</a>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    div.carousel-wrap {
        overflow-x: hidden;
        position: relative;
    }

    ul {
        display: flex;
        justify-content: space-around;
        gap: 1rem;

        transition: transform 500ms ease;

        .carousel--item {
            &-title {
                height: 2rem;
                display: flex;
                justify-content: center;
                a {
                    margin-inline: auto;
                    font-size: large;
                    color: white;
                }
            }
        }
    }

    .faded {
        z-index: 2;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 15%;
        background: rgb(0, 0, 0);

        @media only screen and (max-width: 1020px) {
            background: none !important;
        }

        &-left {
            left: 0;
            background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
        }
        &-right {
            right: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 100%);
        }
    }
</style>
