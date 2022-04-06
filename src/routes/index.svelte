<script context="module">
</script>

<script>
    import Main from '../components/Main.svelte';
    import Carousel from '../components/Carousel.svelte';
    import Section from '../components/Section.svelte';
</script>

<svelte:head>
    <title>Шанс за децата на България - Фондация за млади таланти</title>
</svelte:head>

<Main>
    <Carousel />
    <Section>
        <div class="section-wrap">
            <div class="content">
                <div>
                    <h1>Фондация за млади таланти</h1>
                    <p>
                        Фондация "Шанс за децата и природата на България” си поставя благородната
                        задача да подпомага развитието на талантливи деца и способни млади хора на
                        възраст от 6 до 20 години, осигурявайки им шанс, зависещ изключително от
                        техните качества и умения, трудолюбие и постоянство, и да спонсорира тяхното
                        образование, професионално обучение и творческо развитие.
                    </p>
                    <p>
                        <span class="text-modifier">Основната ни цел</span> е да инвестираме в творчески
                        инициативи за изпреварващо образование и подготовка във всички области на науката,
                        технологиите и изкуството, свързани с интересите и дарбите на нашите деца
                    </p>
                </div>
                <div>
                    <h1>Център за млади таланти</h1>
                    <p>
                        Основен проект за Фондация „Шанс за децата и природата на България” за
                        2011г. е създаването на Център за млади таланти в гр Бургас. От септември
                        2011 в него се осъществяват творчески проекти на изявени учители с изявени и
                        талантливи ученици за надграждане над общообразователната им подготовка.
                    </p>

                    <div class="btn"><a href="/centre">Още за Центъра</a></div>
                </div>
            </div>
            <aside>
                <h3>Актуално</h3>
                <ul>
                    <li>
                        <a href="/">
                            Деца в предучилищна възраст ще премерят сили в IV математически турнир
                        </a>
                    </li>
                    <li>
                        <a href="/"> Дебют: роди се нова младежка медия – "За хвърчащите хора" </a>
                    </li>
                    <li>
                        <a href="/">
                            VII Областна олимпиада по информатика за Бургас и региона ще се проведе
                            онлайн
                        </a>
                    </li>
                    <li>
                        <a href="/"> Стимулират даровити младежи с парични стипендии </a>
                    </li>
                    <li>
                        <a href="/">
                            Обучителни кампании на тема "Предотвратяване замърсяването на морето с
                            пластмаса"
                        </a>
                    </li>
                </ul>

                <div class="btn"><a href="/news">Покажи всички</a></div>
            </aside>
        </div>
    </Section>
</Main>

<style lang="scss">
    span.text-modifier {
        font-weight: 600;
    }

    .section-wrap {
        display: flex;
        gap: 1rem;

        @media only screen and (max-width: 1080px) {
            flex-direction: column;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }

        aside {
            width: 100%;
            height: fit-content;
            background-color: wheat;
            padding-block: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            h3 {
                font-size: xx-large;
                padding-block: 0.8rem;
            }

            ul {
                li {
                    padding: 0.8rem;

                    a {
                        font-style: italic;
                        font-weight: 300;
                        background-image: linear-gradient(
                            90deg,
                            rgb(139, 138, 138),
                            rgb(65, 65, 65)
                        );
                        background-size: 0% 2px;
                        background-repeat: no-repeat;
                        background-position: left bottom;

                        transition: background-size 300ms ease-in-out;
                    }
                    a:hover {
                        background-size: 100% 2px;
                    }
                }
            }
        }

        .btn {
            margin-block: 2rem;
            padding-block: 0.5rem;
            padding-inline: 1rem;
            border-left: 4px solid black;
            border-right: 3px solid black;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            border-radius: 40% 60%;
            width: fit-content;

            transition: border-radius 200ms ease;

            a {
                font-style: italic;
                background-image: linear-gradient(90deg, rgb(115, 167, 245), rgb(0, 86, 214));
                background-size: 0% 1px;
                background-repeat: no-repeat;
                background-position: left bottom;
                transition: color 150ms ease, background-size 200ms ease-in-out;
            }

            &:hover {
                border-left: 4px solid rgba(0, 86, 214, 0.87);
                border-right: 3px solid rgba(0, 86, 214, 0.87);
                border-top: 1px solid rgba(0, 86, 214, 0.87);
                border-bottom: 1px solid rgba(0, 86, 214, 0.87);
                border-radius: 35% 65%;

                a {
                    color: rgba(0, 86, 214, 0.87);
                    background-size: 100% 1px;
                }
            }
        }
    }
</style>
