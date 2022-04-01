<script>
    const year = new Date().getFullYear();
</script>

<footer>
    <p>
        Copyright <a href="https://www.infrablu.xyz" target="blank"
            ><span class="text-modifier">InfraBlu</span></a
        >
        {year} &copy;
    </p>
</footer>

<style lang="scss">
    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 4rem;
        background-color: white;
        span.text-modifier {
            font-weight: 600;
            font-style: italic;
            color: #18144c;
        }
    }
</style>
