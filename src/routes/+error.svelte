<script context="module">
    // throw new Error("@migration task: Replace error load function (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3293209)");

    export function load({ error, status }) {
        return {
            props: {
                message: error.message,
                status: status,
            },
        };
    }
</script>

<script>
    export let message;
    export let status;
</script>

<div>
    <h1>{message}</h1>
    <p>Error code: {status}</p>
</div>

<style lang="scss">
    div {
        height: 72vh;
        width: 100vw;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: white;
    }
</style>
