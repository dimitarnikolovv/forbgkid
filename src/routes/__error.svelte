<script context="module">
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
