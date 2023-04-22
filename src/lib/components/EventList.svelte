<script>
    import { marked } from 'marked';
    import { fade } from 'svelte/transition';

    export let events;
    export let date = { day: 0, month: '' };
    export let onClose;

    function clickOutside(node) {
        const handleClick = (event) => {
            if (node && !node.contains(event.target) && !event.defaultPrevented) {
                node.dispatchEvent(new CustomEvent('click_outside', node));
            }
        };

        document.addEventListener('click', handleClick, true);

        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            },
        };
    }
</script>

<div
    class="event-list"
    use:clickOutside
    on:click_outside={onClose}
    transition:fade={{ duration: 100 }}
>
    <header>
        <h5>Събития за {date.day}. {date.month}</h5>
        <span class="material-symbols-rounded" on:click={onClose} on:keypress={onClose}>close</span>
    </header>

    {#each events as event}
        <div class="event-entry">
            <h5>{event.title}</h5>
            <span
                >{new Date(event.startsAt).toLocaleTimeString('bg-BG', {
                    hour: '2-digit',
                    minute: '2-digit',
                })} - {new Date(event.endsAt).toLocaleTimeString('bg-BG', {
                    hour: '2-digit',
                    minute: '2-digit',
                })}</span
            >
            <p>{event.description}</p>
            <div class="content-wrapper">{@html marked(event.content)}</div>
        </div>
    {/each}
</div>

<style lang="scss">
    .event-list {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        position: absolute;
        overflow-y: auto;
        z-index: 2;
        width: calc(100% - 2rem);
        height: fit-content;
        max-height: calc(100% - 1rem);
        padding: 1rem;

        background-color: white;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        border-radius: 10px;

        &::-webkit-scrollbar {
            width: 1px;
        }

        h5 {
            font-size: 1.4rem;
        }
        p {
            font-size: 0.8em;
        }
        div.content-wrapper {
            text-align: left;
        }

        header {
            display: flex;
            justify-content: space-between;
            gap: 1.5rem;
            padding-block-end: 0.5rem;
            width: 100%;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);

            span {
                font-size: 1.2rem;

                cursor: pointer;
                border-radius: 50%;
                width: 1.3em;
                height: 1.3em;
                border: none;
                background: none;
                text-align: center;
                line-height: 1.3em;

                &:hover {
                    background-color: #f2f2f2;
                }
            }
        }
    }
</style>
