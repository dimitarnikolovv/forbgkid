<script>
    import { marked } from 'marked';

    export let events;
    export let date = { day: 0, month: '' };
    export let onClose;
</script>

<div class="event-list">
    <header>
        <h5>Събития за {date.day}. {date.month}</h5>
        <button class="close" on:click={onClose}>x</button>
    </header>

    {#each events as event}
        <div class="event-entry">
            <h5>{event.title}</h5>
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
            padding-block-end: 0.5rem;
            width: 100%;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }

        .close {
            font-size: 1.2rem;

            cursor: pointer;
            border-radius: 50%;
            width: 1.3em;
            height: 1.3em;
            border: none;
            background: none;

            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
</style>
