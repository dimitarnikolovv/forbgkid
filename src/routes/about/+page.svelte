<script>
    import { slide } from 'svelte/transition';
    import MarkedData from '../../components/MarkedData.svelte';

    export let data;
</script>

<svelte:head>
    <title>{data.about.title}</title>
</svelte:head>
<div in:slide={{ duration: 200, delay: 300 }} out:slide={{ duration: 200 }}>
    <MarkedData
        markedData={{
            title: data.about.title,
            content: data.about.content,
            media: { data: false },
        }}
    />
</div>
