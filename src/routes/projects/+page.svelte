<script>
    import { fly } from 'svelte/transition';
</script>

<svelte:head>
    <title>Проекти</title>
</svelte:head>

<div in:fly={{ x: 100, duration: 200, delay: 300 }} out:fly={{ x: -400, duration: 200 }}>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum voluptatem et dolor
        excepturi ipsum nobis, nemo expedita animi libero doloremque architecto exercitationem,
        repellat sed fugiat consequuntur, consectetur molestias delectus ea fugit laboriosam
        accusantium quibusdam cumque natus! Consectetur, adipisci. Aut soluta neque quod doloribus
        et minus numquam vitae cumque quos? Soluta ipsum amet iusto exercitationem ad! Doloribus
        earum architecto cumque iure explicabo exercitationem ipsa, ratione accusamus perferendis
        minus quo incidunt libero iusto sapiente nesciunt quia atque distinctio pariatur nihil quam
        cum similique? Facilis omnis porro magni dolorem amet dolor vitae assumenda molestiae quas
        beatae impedit ipsa ea maiores, repudiandae ipsam.
    </p>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque maxime voluptates optio
        deleniti earum doloribus excepturi labore laboriosam! Laborum, harum. Molestias non esse et
        dicta vitae error necessitatibus illum in adipisci sequi aperiam nostrum suscipit incidunt,
        inventore distinctio soluta veniam.
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, explicabo neque
        pariatur ea similique voluptatum esse libero quod nam aut perferendis praesentium nulla
        incidunt, vero animi quae! Praesentium, at deserunt.
    </p>
</div>
