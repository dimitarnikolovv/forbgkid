<script>
    import { page } from '$app/stores';
    import Arrow from './icons/Arrow.svelte';
    import { slide } from 'svelte/transition';

    $: isActive = function (url) {
        let pattern = new RegExp(`\\B\\${url}`);
        let matched = $page.url.pathname.match(pattern);

        return url == matched;
    };

    let isChecked = false;
    const doChecked = function () {
        isChecked = !isChecked;
    };
</script>

<nav>
    <input type="checkbox" class="sr-only" id="check" checked={isChecked} on:click={doChecked} />
    <label class="nav-button" for="check">
        <span />
        <span />
        <span />
    </label>
    {#if isChecked === true}
        <ul class="mobile-nav" transition:slide>
            <li>
                <a href="/" class:active={$page.url.pathname === '/'} on:click={doChecked}>Начало</a
                >
                <div class="arrow">
                    <Arrow active={$page.url.pathname === '/'} directional={true} />
                </div>
            </li>
            <li>
                <a href="/about" class:active={isActive('/about')} on:click={doChecked}
                    >Как помагаме</a
                >
                <div class="arrow">
                    <Arrow active={isActive('/about')} directional={true} />
                </div>
            </li>
            <li>
                <a href="/projects" class:active={isActive('/projects')} on:click={doChecked}
                    >Проекти</a
                >
                <div class="arrow">
                    <Arrow active={isActive('/projects')} directional={true} />
                </div>
            </li>
            <li>
                <a href="/centre" class:active={isActive('/centre')} on:click={doChecked}
                    >За центъра</a
                >
                <div class="arrow">
                    <Arrow active={isActive('/centre')} directional={true} />
                </div>
            </li>
            <li>
                <a href="/donate" class:active={isActive('/donate')} on:click={doChecked}>Дарение</a
                >
                <div class="arrow">
                    <Arrow active={isActive('/donate')} directional={true} />
                </div>
            </li>
            <li>
                <a href="/contact" class:active={isActive('/contact')} on:click={doChecked}
                    >Контакти</a
                >
                <div class="arrow">
                    <Arrow active={isActive('/contact')} directional={true} />
                </div>
            </li>
        </ul>
    {/if}
    <ul class="main-nav">
        <li>
            <a href="/" class:active={$page.url.pathname === '/'}>Начало</a>
            <div class="arrow">
                <Arrow active={$page.url.pathname === '/'} directional={true} />
            </div>
        </li>
        <li>
            <a href="/about" class:active={isActive('/about')}>Как помагаме</a>
            <div class="arrow">
                <Arrow active={isActive('/about')} directional={true} />
            </div>
        </li>
        <li>
            <a href="/projects" class:active={isActive('/projects')}>Проекти</a>
            <div class="arrow">
                <Arrow active={isActive('/projects')} directional={true} />
            </div>
        </li>
        <li>
            <a href="/centre" class:active={isActive('/centre')}>За центъра</a>
            <div class="arrow">
                <Arrow active={isActive('/centre')} directional={true} />
            </div>
        </li>
        <li>
            <a href="/donate" class:active={isActive('/donate')}>Дарение</a>
            <div class="arrow">
                <Arrow active={isActive('/donate')} directional={true} />
            </div>
        </li>
        <li>
            <a href="/contact" class:active={isActive('/contact')}>Контакти</a>
            <div class="arrow">
                <Arrow active={isActive('/contact')} directional={true} />
            </div>
        </li>
    </ul>
</nav>

<style lang="scss">
    a.active {
        color: rgb(48, 110, 243);
    }
    ul {
        display: flex;
        gap: 1rem;
        justify-content: center;

        li {
            font-weight: 500;
            font-style: normal;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            height: 2rem;
            color: rgb(0, 0, 0);

            div {
                transition: transform 200ms ease-in-out;
            }
        }

        a {
            text-transform: uppercase;
            font-weight: 600;
            font-size: small;
            padding-inline-start: 0.4rem;
            transition: color 200ms ease-in-out;

            @media only screen and (min-width: 1470px) {
                font-size: medium;
            }

            &:hover {
                & + div {
                    transform: translateX(5px);
                }
            }
        }

        div.arrow {
            :global(svg) {
                transform: scale(0.9);

                @media only screen and (min-width: 1470px) {
                    transform: scale(1);
                }
            }
        }

        &.main-nav {
            @media only screen and (max-width: 1219px) {
                display: none;
            }
        }

        &.mobile-nav {
            flex-direction: column;
            gap: 0;
            width: 100vw;
            li {
                width: inherit;
                height: 10vh;
            }
        }
    }

    input[type='checkbox'] {
        @media only screen and (min-width: 1220px) {
            display: none;
        }
    }

    input[type='checkbox']:checked + label span:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotatez(45deg) translate(8px, 0px);
    }

    input[type='checkbox']:checked + label span:nth-of-type(2) {
        transform-origin: top;
        transform: rotatez(-45deg);
    }

    input[type='checkbox']:checked + label span:nth-of-type(3) {
        transform-origin: bottom;
        width: 50%;
        transform: translate(19px, -7px) rotatez(45deg);
    }

    label.nav-button {
        display: flex;
        flex-direction: column;
        width: 40px;
        cursor: pointer;

        span {
            background: rgb(0, 0, 0);
            border-radius: 10px;
            height: 3px;
            margin: 5px 0;
            transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

            &:nth-of-type(1) {
                width: 50%;
            }

            &:nth-of-type(2) {
                width: 100%;
            }

            &:nth-of-type(3) {
                width: 75%;
            }
        }

        @media only screen and (min-width: 1220px) {
            display: none;
        }
    }
    ul.mobile-nav {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 100%;
        left: 0;
        width: 100vw;
        height: 80vh;
        background-color: rgb(255, 255, 255, 0.85);
        backdrop-filter: saturate(50%) blur(4px);

        transition: transform 200ms ease-in-out;

        @media only screen and (min-width: 1220px) {
            display: none;
        }
    }
</style>
