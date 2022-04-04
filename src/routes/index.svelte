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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                            repellat?
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            A facere nobis dolorum dicta deleniti officiis consectetur autem minima.
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Iste nulla, accusamus maxime quo architecto esse blanditiis quas
                            veritatis.
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Dolor, error distinctio. Cum exercitationem excepturi cupiditate nihil
                            explicabo veniam.
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Enim laborum praesentium veritatis repellat repellendus temporibus sed
                            sapiente! Recusandae!
                        </a>
                    </li>
                </ul>
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
                        position: relative;
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
            background-color: red;
            width: fit-content;
        }
    }
</style>
