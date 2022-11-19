<script>
    import qs from 'qs';
    import { onMount } from 'svelte';
    import Entry from './Entry.svelte';

    export let params = {
        fetchURL: '',
        querry: '',
        title: '',
        targetEndpoint: '',
    };
    $: console.log(scrollY);
    let scrollY = 0;
    let stateLoading = true;
    let stateEntries = null;
    let stateMeta = null;
    let stateCurrentPageNumber = 1;
    let stateCurrentPageSize = 15;

    async function getEntries(pageNumber, pageSize) {
        const querry =
            params.querry +
            '&' +
            qs.stringify(
                {
                    pagination: {
                        page: pageNumber,
                        pageSize: pageSize,
                    },
                    sort: ['createdAt:desc'],
                },
                { encodeValuesOnly: true }
            );

        const url = `${params.fetchURL}?${querry}`;
        const res = await fetch(url);

        if (res.status === 404) {
            const error = new Error(`The project was not found`);
            return { status: 404, error };
        } else {
            const entries = await res.json();
            return { entries: entries.data, meta: entries.meta };
        }
    }

    async function updateEntriesByPage(pageNumber) {
        scrollY = 0;
        stateLoading = true;
        stateCurrentPageNumber = pageNumber;
        const { entries, meta } = await getEntries(stateCurrentPageNumber, stateCurrentPageSize);
        stateEntries = entries;
        stateMeta = meta;
        stateLoading = false;
    }

    onMount(async () => {
        await updateEntriesByPage(stateCurrentPageNumber);
    });
</script>

<svelte:window bind:scrollY />

{#if !stateLoading}
    <div class="head">
        <h1>{params.title}</h1>
        <div class="controls top">
            <div>
                <label for="inputPageSize">Покажи по </label>
                <input
                    name="inputPageSize"
                    type="number"
                    bind:value={stateCurrentPageSize}
                    min="1"
                    max={stateMeta.pagination.total}
                />
                <button
                    on:click|preventDefault={() => updateEntriesByPage(stateCurrentPageNumber)}
                    disabled={stateMeta.pagination.total === stateCurrentPageSize + 1}
                    >Приложи</button
                >
            </div>
        </div>
    </div>
    <div class="entry-wrap">
        {#each stateEntries as entry}
            <Entry passedData={entry} targetEndpoint={params.targetEndpoint} />
        {/each}
    </div>

    <div class="controls bottom">
        <button
            on:click|preventDefault={() => updateEntriesByPage(--stateCurrentPageNumber)}
            disabled={stateMeta.pagination.page === 1}>Назад</button
        >
        <div class="pagination">
            {#each { length: stateMeta.pagination.pageCount } as _, p}
                <button
                    on:click|preventDefault={() => updateEntriesByPage(p + 1)}
                    disabled={stateMeta.pagination.page === p + 1}>{p + 1}</button
                >
            {/each}
        </div>
        <button
            on:click|preventDefault={() => updateEntriesByPage(++stateCurrentPageNumber)}
            disabled={stateMeta.pagination.page === stateMeta.pagination.pageCount}>Напред</button
        >
    </div>
{:else}
    <div class="skeleton" />
{/if}

<style lang="scss">
    div.entry-wrap {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .head {
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            margin-block-end: 2rem;
        }
    }
    .controls {
        display: flex;
        justify-content: center;
        gap: 3rem;
        align-items: center;
        margin-block: 3rem;

        &.top {
            margin-top: 0;
            margin-bottom: 0;
        }

        &.bottom {
            margin-bottom: 0;
        }
    }

    input {
        vertical-align: middle;
        outline: none;
        border: none;
        border-bottom: 0.0625rem solid rgb(104, 101, 101);
        border-radius: 0.125rem;
        padding: 0.25rem 0.5rem;
        margin-inline: 0.8rem;
    }
    input:focus {
        border-bottom: 0.07rem solid rgb(63, 61, 61);
    }
    .pagination {
        display: flex;
        flex-wrap: nowrap;
        overflow: scroll hidden;
        border-radius: 0.125rem;
        margin: auto 1rem;
    }
    .pagination::-webkit-scrollbar {
        height: 0;
    }
    .pagination button {
        border-radius: 0;
    }
    button {
        vertical-align: middle;
        cursor: pointer;
        background: rgb(63, 61, 61);
        outline: none;
        border: 0.0625rem solid rgb(63, 61, 61);
        color: #ffffff;
        border-radius: 0.125rem;
        padding: 0.25rem 0.5rem;
    }
    button:hover {
        background: #000000;
    }
    button:disabled {
        background: gray;
        border: 0.0625rem solid gray;
        cursor: not-allowed;
    }
</style>
