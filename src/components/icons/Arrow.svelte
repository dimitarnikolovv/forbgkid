<script>
    export let active = false;
    export let directional = false;

    $: direction = directional && active ? 'left' : 'right';

    $: clr = active ? 'white' : '#333';
</script>

<svg
    style="fill: {clr}"
    width="30"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
>
    {#if direction === 'right'}
        <path
            d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
        />
    {/if}

    {#if direction === 'left'}
        <path
            d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
        />
    {/if}
</svg>

<style lang="scss">
    svg {
        transition: fill 200ms ease-in-out;
    }
</style>
