<script>
    export let params = { text: '', link: '' };
</script>

<div class="btn"><a href={params.link}>{params.text}</a></div>

<style lang="scss">
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
</style>
