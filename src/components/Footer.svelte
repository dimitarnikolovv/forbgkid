<script>
    const year = new Date().getFullYear();
</script>

<footer>
    <div class="container">
        <p>
            Фондация "Шанс за децата и природата на България" е неправителствена организация за
            осъществяване на общественополезна дейност. Фондацията е регистрирана на 18.02.2011 г.,
            вписана в ТР и регистъра на ЮЛНЦ към Агенцията по вписванията с ЕИК 176040614.
        </p>
        <p>
            Designed and Made By <a href="https://www.infrablu.xyz" target="blank"
                ><span class="text-modifier">InfraBlu</span></a
            >
            {year} &copy;
        </p>
    </div>
</footer>

<style lang="scss">
    footer {
        width: 100vw;
        min-height: 5rem;
        background-color: white;

        .container {
            margin-inline: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 80%;
            font-size: 0.8rem;

            @media only screen and (max-width: 768px) {
                width: 90vw;
                font-size: 0.7rem;
            }
        }
        span.text-modifier {
            font-weight: 600;
            font-style: italic;
            color: #18144c;
        }
    }
</style>
