<script>
    import { page } from '$app/stores';
    import Arrow from './icons/Arrow.svelte';
    import { slide } from 'svelte/transition';

    export let onScroll = false;

    $: isActive = function (url) {
        return url === $page.url.pathname ? true : false;
    };

    let isChecked = false;
    const doChecked = function () {
        isChecked = !isChecked;
    };
</script>

<nav>
    <label class="nav-button" for="check">
        <input type="checkbox" id="check" on:click={doChecked} />
        <span />
        <span />
        <span />

        {#if isChecked === true}
            <div class="nav-container {onScroll ? 'onScroll' : ''}" transition:slide>
                <ul class="mobile-nav">
                    <li>
                        <a href="/" class:active={isActive('/')}>Начало</a>
                        <div class="arrow">
                            <Arrow active={isActive('/')} directional={true} />
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
                        <a href="/centre" class:active={isActive('/centre')}
                            >Център за млади таланти</a
                        >
                        <div class="arrow">
                            <Arrow active={isActive('/centre')} directional={true} />
                        </div>
                    </li>
                    <li>
                        <a href="/kids" class:active={isActive('/kids')}>Нашите деца</a>
                        <div class="arrow">
                            <Arrow active={isActive('/kids')} directional={true} />
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
            </div>
        {/if}
    </label>
    <ul class="main-nav {onScroll ? 'onScroll' : ''}">
        <li>
            <a href="/" class:active={isActive('/')}>Начало</a>
            <div class="arrow">
                <Arrow active={isActive('/')} directional={true} />
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
            <a href="/centre" class:active={isActive('/centre')}>Център за млади таланти</a>
            <div class="arrow">
                <Arrow active={isActive('/centre')} directional={true} />
            </div>
        </li>
        <li>
            <a href="/kids" class:active={isActive('/kids')}>Нашите деца</a>
            <div class="arrow">
                <Arrow active={isActive('/kids')} directional={true} />
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
        color: white;
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
            color: #aaa;

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

    label.nav-button {
        display: flex;
        flex-direction: column;
        width: 40px;
        cursor: pointer;

        span {
            background: #fff;
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
        input[type='checkbox'] {
            display: none;
        }

        input[type='checkbox']:checked ~ span:nth-of-type(1) {
            transform-origin: bottom;
            transform: rotatez(45deg) translate(8px, 0px);
        }

        input[type='checkbox']:checked ~ span:nth-of-type(2) {
            transform-origin: top;
            transform: rotatez(-45deg);
        }

        input[type='checkbox']:checked ~ span:nth-of-type(3) {
            transform-origin: bottom;
            width: 50%;
            transform: translate(19px, -7px) rotatez(45deg);
        }
        div.nav-container {
            z-index: 10;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 6.9rem;
            left: -5.5%;
            width: 100vw;
            height: 80vh;
            background-color: rgba(0, 0, 0, 0.95);
            transition: transform 200ms ease-in-out;

            &.onScroll {
                transform: translateY(-3.9rem);
            }
        }

        @media only screen and (min-width: 1220px) {
            display: none;
        }
    }
</style>
