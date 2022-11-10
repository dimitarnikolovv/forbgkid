<script>
    import projects from '../projects.json';
    import { page } from '$app/stores';
    import Project from '/src/components/Project.svelte';

    $: projectId = $page.params.projectId;
    $: project = projects.find(({ id }) => id === projectId);
</script>

<svelte:head>
    <title>{project ? project.name : ''}</title>
</svelte:head>

{#if project}
    {#key projectId}
        <Project name={project.name} id={project.id}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil eius,
                incidunt laborum nisi aspernatur praesentium natus! Explicabo est quam assumenda
                repellendus quae natus voluptate dolore aspernatur ipsum? Commodi minima error
                soluta ipsum ducimus dolorem cupiditate debitis, amet ullam. Earum assumenda fugit
                suscipit similique, iste commodi tempora vitae autem est. Sapiente sed voluptas,
                molestias dolores ab doloribus exercitationem quae quam dolore culpa mollitia fugit,
                illum eum! Sint aspernatur iste voluptate fuga eligendi, voluptatum necessitatibus
                inventore molestias tempore atque quia harum, enim veniam deleniti, rem qui modi
                provident non possimus. Ut harum fugit, officia minima veritatis omnis eligendi?
                Aspernatur quibusdam nobis provident a iste repellat rerum. Dolorum omnis aperiam
                quia aliquam minima tenetur cupiditate dolorem in at esse maxime
            </p>
            <p>
                repudiandae modi suscipit, inventore adipisci eligendi aut excepturi itaque unde?
                Cupiditate harum earum voluptatum dolor tempore eius tenetur sit voluptas nulla
                deleniti unde placeat itaque autem tempora adipisci, quas doloribus eum non! Eaque,
                repellendus porro, facilis quis repellat eveniet ea nostrum, omnis provident
                necessitatibus laudantium unde? Modi vel excepturi fugit soluta molestias
                laudantium, corporis repellendus tempora quia dicta aperiam quidem eum nulla
                voluptatibus enim praesentium, odio, laborum porro autem doloribus nobis cumque ab
                molestiae! Fuga, accusamus. Voluptate voluptates ad ab quos fugiat.
            </p>
        </Project>
    {/key}
{/if}
