<script>
    export let onScroll = false;
</script>

<a class:small={onScroll} href="https://www.kids.infrablu.xyz" target="blank">
    <img src="/images/forbgkids-logo-only.png" alt="Tree with leaves of kid's hands" />
</a>

<style lang="scss">
    a {
        height: 6rem;
        &.small {
            height: 3rem;
        }
        img {
            height: 100%;
        }

        @media only screen and (max-width: 350px) {
            height: 4rem;
        }
    }
</style>
