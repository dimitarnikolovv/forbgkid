<script>
    /** @type {import('./$types').PageData} */
    export let data;
    /** @type {import('./$types').ActionData} */
    export let form;

    import Section from '../../components/Section.svelte';
</script>

<Section>
    <form method="POST" enctype="multipart/form-data">
        <label for="names">Имена</label>
        <fieldset id="names">
            <label for="firstName">Име</label>
            <input type="text" name="firstName" id="firstName" />

            <label for="middleName">Презиме</label>
            <input type="text" name="middleName" id="middleName" />

            <label for="lastName">Фамилия</label>
            <input type="text" name="lastName" id="lastName" />
        </fieldset>

        <fieldset id="geo-info">
            <label for="age">Възраст</label>
            <input type="number" name="age" id="age" />

            <label for="school">Учебно заведение</label>
            <input type="text" name="school" id="school" />

            <label for="city">Град</label>
            <input type="text" name="city" id="city" />
        </fieldset>

        <fieldset id="contact-info">
            <label for="tel">Телефон</label>
            <input type="tel" name="tel" id="tel" />

            <label for="email">Имейл</label>
            <input type="email" name="email" id="email" />
        </fieldset>

        <fieldset id="files">
            <label for="art">Творба</label>
            <input type="file" name="file" accept="*" id="art" />

            <label for="declaration">Декларация</label>
            <input type="file" name="declaration" accept="*" id="declaration" />
        </fieldset>
        <button type="submit">Submit</button>
    </form>
</Section>
