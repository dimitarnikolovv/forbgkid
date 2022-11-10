<script>
    import { slide } from 'svelte/transition';
</script>

<svelte:head>
    <title>Критерии за подбор на кандидати</title>
</svelte:head>

<div in:slide={{ duration: 200, delay: 300 }} out:slide={{ duration: 200 }}>
    <div>
        <h1>Кандидати се избират по следните критерии:</h1>

        <ul>
            <li>
                <p>
                    Успех - общ и по съответната учебна дисциплина. Удостоверение за успеха от
                    предходната учебна година или учебен срок (при кандидатстване в началото на
                    календарната година) се прилага към формуляра;
                </p>
            </li>
            <li>
                <p>
                    Предимство при кандидатстване имат кандидатите приложили: удостоверения за
                    постигнат успех, изява, талант (грамоти, отличия за постигнати резултати на
                    олимпиади, състезания, конкурси, рецензии, характеристики и други). Прилагат се
                    при кандидатстване към формуляра;
                </p>
            </li>
            <li>
                <p>Резултати от входящия тест.</p>
            </li>
        </ul>
    </div>

    <div>
        <p>
            <a
                rel="external"
                href="http://www.forbgkids.org/cdir/forbgkids.org/files/Формуляр_за_кандидати_last_17.10.doc"
                ><span class="text-transform">Формуляр за кандидатстване (MS Word format)</span></a
            >
            моля изпращайте формулярите на
            <a href="mailto:info@forbgkids.org"
                ><span class="text-transform">info@forbgkids.org</span></a
            >
        </p>
    </div>
</div>

<style lang="scss">
    span.text-transform {
        font-weight: 600;
    }
    ul {
        margin-block-end: 2rem;
        li {
            background-image: url('/icons/check-mark-24x24.svg');
            background-repeat: no-repeat;
            p {
                margin-inline-start: 32px;
            }
        }
    }

    a {
        transition: color 200ms ease;
        &:hover {
            color: rgba(0, 86, 214, 0.87);
        }
    }
</style>
