<script>
    import { enhance } from '$app/forms';
    import toast, { Toaster } from 'svelte-french-toast';
    import Main from '../../components/Main.svelte';
    import Section from '../../components/Section.svelte';

    /** @type {import('./$types').ActionData} */
    export let form;

    function submitForm({ form, cancel }) {
        return async ({ result, update }) => {
            switch (result.type) {
                case 'success':
                    toast.success('Успешно изпратено. Благодарим :)');

                    let svgs = form.querySelectorAll('fieldset#files svg');
                    let pies = form.querySelectorAll('fieldset#files p');

                    svgs.forEach((svg) => {
                        svg.innerHTML = `<path
                            d="M12.5 40q-4.3 0-7.4-3.1Q2 33.8 2 29.5q0-3.9 2.475-6.875t6.375-3.575q1-4.85 4.7-7.925T24.1 8.05q5.65 0 9.475 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40H25.5q-1.2 0-2.1-.9-.9-.9-.9-2.1V24.1l-4.15 4.15-2.15-2.15 7.8-7.8 7.8 7.8-2.15 2.15-4.15-4.15V37h12.05q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.45-3.025-7.65t-7.475-3.2q-4.45 0-7.5 3.2t-3.05 7.65h-.95q-3.1 0-5.25 2.175T5 29.45q0 3.1 2.2 5.325T12.5 37h7v3ZM24 25.5Z"
                        />`;
                    });

                    pies.forEach((p) => {
                        p.innerHTML = `Натиснете за да изберете файл или го привлачете в полето.`;
                    });

                    break;
                default:
                    toast.error('Нещо се обърка ;(');
                    cancel();
                    break;
            }
            await update();
        };
    }

    function displayFile(e) {
        const [file] = e.target.files;
        const { name: fileName, size } = file;
        const fileSize = (size / 1000).toFixed(2);

        e.target.nextElementSibling.querySelector('p').innerHTML = `${fileName} - ${fileSize}KB`;
        e.target.nextElementSibling.querySelector('svg').innerHTML = `<path
                            class="ready"
                            d="m20.6 34.05 11.5-11.5-2-2L20.65 30l-5-5-2.05 2.05ZM12.55 40q-4.4 0-7.475-3.075Q2 33.85 2 29.45q0-3.9 2.5-6.85 2.5-2.95 6.35-3.55 1-4.85 4.7-7.925T24.1 8.05q5.6 0 9.45 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40Zm0-3h25q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.55-3.05-7.7-3.05-3.15-7.45-3.15t-7.475 3.15q-3.075 3.15-3.075 7.7h-.95q-3.1 0-5.25 2.175T5 29.45q0 3.15 2.2 5.35Q9.4 37 12.55 37ZM24 24Z"
                        />`;
    }
</script>

<Toaster />

<Main>
    <Section>
        <form method="POST" enctype="multipart/form-data" use:enhance={submitForm}>
            <fieldset id="names">
                <legend>Информация за кандидата (Всички полета са задължителни)</legend>
                <div class="block-wrapper">
                    Казвам се
                    <div class="group">
                        <label for="firstName" class="sr-only">Име</label>

                        <input
                            type="text"
                            name="first_name"
                            id="firstName"
                            placeholder="Име"
                            required
                        />
                        {#if form?.errors?.first_name}
                            <label class="error-label" for="firstName">
                                {form?.errors?.first_name[0]}
                            </label>
                        {/if}
                    </div>

                    <div class="group">
                        <label for="middleName" class="sr-only">Презиме</label>
                        <input
                            type="text"
                            name="middle_name"
                            id="middleName"
                            placeholder="Презиме"
                            required
                        />
                        {#if form?.errors?.middle_name}
                            <label class="error-label" for="firstName">
                                {form?.errors?.middle_name[0]}
                            </label>
                        {/if}
                    </div>

                    <div class="group">
                        <label for="lastName" class="sr-only">Фамилия</label>
                        <input
                            type="text"
                            name="last_name"
                            id="lastName"
                            placeholder="Фамилия"
                            required
                        />
                        {#if form?.errors?.last_name}
                            <label class="error-label" for="firstName">
                                {form?.errors?.last_name[0]}
                            </label>
                        {/if}
                    </div>
                    .
                </div>

                <div class="block-wrapper">
                    На
                    <div class="group">
                        <label for="age" class="sr-only">Възраст</label>
                        <input
                            type="number"
                            name="age"
                            min="1"
                            max="99"
                            id="age"
                            placeholder="Години"
                            required
                        />
                        {#if form?.errors?.age}
                            <label class="error-label" for="firstName">
                                {form?.errors?.age[0]}
                            </label>
                        {/if}
                    </div>
                    години съм и уча в/ъв

                    <div class="group">
                        <label for="school" class="sr-only">Учебно заведение</label>
                        <input
                            type="text"
                            name="school"
                            id="school"
                            placeholder="Учебно заведение"
                            required
                        />
                        {#if form?.errors?.school}
                            <label class="error-label" for="firstName">
                                {form?.errors?.school[0]}
                            </label>
                        {/if}
                    </div>
                    в град
                    <div class="group">
                        <label for="city" class="sr-only">Град</label>
                        <input type="text" name="city" id="city" placeholder="Град" required />
                        {#if form?.errors?.city}
                            <label class="error-label" for="firstName">
                                {form?.errors?.city[0]}
                            </label>
                        {/if}
                    </div>
                    .
                </div>

                <div class="block-wrapper">
                    Може да ме потърсите на телефон
                    <div class="group">
                        <label for="tel" class="sr-only">Телефон</label>
                        <input type="tel" name="tel" id="tel" placeholder="Телефон" required />
                        {#if form?.errors?.tel}
                            <label class="error-label" for="firstName">
                                {form?.errors?.tel[0]}
                            </label>
                        {/if}
                    </div>
                    или на имейл
                    <div class="group">
                        <label for="email" class="sr-only">Имейл</label>
                        <input type="email" name="email" id="email" placeholder="Имейл" required />
                        {#if form?.errors?.email}
                            <label class="error-label" for="firstName">
                                {form?.errors?.email[0]}
                            </label>
                        {/if}
                    </div>
                    .
                </div>
            </fieldset>

            <fieldset id="files">
                <legend>Файлове за прикачване</legend>

                <input
                    class="sr-only"
                    type="file"
                    name="work"
                    accept="*"
                    id="work"
                    on:change={(e) => {
                        displayFile(e);
                    }}
                    required
                />
                <label for="work" class="file-label">
                    <h2>Творба</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path
                            d="M12.5 40q-4.3 0-7.4-3.1Q2 33.8 2 29.5q0-3.9 2.475-6.875t6.375-3.575q1-4.85 4.7-7.925T24.1 8.05q5.65 0 9.475 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40H25.5q-1.2 0-2.1-.9-.9-.9-.9-2.1V24.1l-4.15 4.15-2.15-2.15 7.8-7.8 7.8 7.8-2.15 2.15-4.15-4.15V37h12.05q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.45-3.025-7.65t-7.475-3.2q-4.45 0-7.5 3.2t-3.05 7.65h-.95q-3.1 0-5.25 2.175T5 29.45q0 3.1 2.2 5.325T12.5 37h7v3ZM24 25.5Z"
                        />
                    </svg>

                    <p>Натиснете за да изберете файл или го привлачете в полето.</p>
                </label>

                <input
                    class="sr-only"
                    type="file"
                    name="declaration"
                    accept="*"
                    id="declaration"
                    on:change={(e) => {
                        displayFile(e);
                    }}
                    required
                />
                <label for="declaration" class="file-label">
                    <h2>Декларация</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path
                            d="M12.5 40q-4.3 0-7.4-3.1Q2 33.8 2 29.5q0-3.9 2.475-6.875t6.375-3.575q1-4.85 4.7-7.925T24.1 8.05q5.65 0 9.475 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40H25.5q-1.2 0-2.1-.9-.9-.9-.9-2.1V24.1l-4.15 4.15-2.15-2.15 7.8-7.8 7.8 7.8-2.15 2.15-4.15-4.15V37h12.05q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.45-3.025-7.65t-7.475-3.2q-4.45 0-7.5 3.2t-3.05 7.65h-.95q-3.1 0-5.25 2.175T5 29.45q0 3.1 2.2 5.325T12.5 37h7v3ZM24 25.5Z"
                        />
                    </svg>
                    <p>Натиснете за да изберете файл или го привлачете в полето.</p>
                </label>
            </fieldset>

            <fieldset>
                <input type="checkbox" name="policy" id="policy" required />
                <label for="policy">
                    Съгласен съм с <a href="./projects/privacy">
                        политиката за използване на лични данни</a
                    >.</label
                >
                {#if form?.errors?.policy}
                    <label class="error-label" for="firstName">
                        {form?.errors?.policy[0]}
                    </label>
                {/if}
            </fieldset>
            <button type="submit">Изпрати</button>
        </form>
    </Section>
</Main>

<style lang="scss">
    :global(form fieldset label svg .ready) {
        fill: rgb(28, 198, 28);
    }

    form {
        background-color: white;
        height: fit-content;
        min-width: 60vw;
        max-width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        border-radius: 10px;
    }

    .block-wrapper {
        margin-block: 0.8em;
    }

    .group {
        display: inline-flex;
        flex-direction: column;
        position: relative;
        margin-inline: 0.3em;
    }

    input {
        position: relative;
        &[type='text'],
        &[type='number'],
        &[type='email'],
        &[type='tel'] {
            display: inline;
            border: none;
            border-bottom: 1px solid black;
        }

        &[type='number'] {
            width: 2.5em;
        }
    }

    fieldset {
        label.error-label {
            color: rgb(240, 99, 99);
            font-size: 0.6em;
        }
        &#files {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-bottom: 3em;
            border-bottom: 1px solid #ccc;
            border-radius: 3px;

            input[type='file']:hover + label,
            input[type='file']:focus + label {
                outline: 1px solid black;
            }

            label.file-label {
                text-align: center;
                cursor: pointer;
                outline: 1px dashed #ccc;
                background-color: #fbfcff;
                border-radius: 10px;
                display: inline-block;
                margin-block-start: 1em;
                padding: 1em 2em;
                width: 30%;

                transition: outline 100ms;

                @media only screen and (max-width: 580px) {
                    width: 100%;
                }

                svg {
                    fill: #ccc;
                }

                p {
                    margin: 0;
                    font-size: 0.8em;
                }
            }
        }
        legend {
            font-size: 1.3em;

            &::after {
                content: '*';
                color: rgb(240, 99, 99);
            }
        }

        label[for='policy'] {
            &::after {
                content: '*';
                color: rgb(240, 99, 99);
            }
        }

        a {
            font-weight: 500;
            font-style: italic;
            color: rgb(41, 76, 174);

            background-image: linear-gradient(90deg, rgba(38, 58, 130, 0.771), rgb(57, 70, 152));
            background-size: 0% 2px;
            background-repeat: no-repeat;
            background-position: left bottom;

            transition: background-size 200ms ease-in-out;

            &:hover {
                background-size: 100% 2px;
            }
        }
    }

    button[type='submit'] {
        cursor: pointer;
        color: white;
        margin-inline: auto;
        padding: 1em 1.8em;
        width: fit-content;
        border: none;
        border-radius: 0.5em;
        background-color: rgb(4, 191, 4);

        &:hover {
            background-color: rgb(28, 198, 28);
        }
    }
</style>
