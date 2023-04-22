<script>
    import Calendar from '$lib/components/Calendar.svelte';
    export let data;
</script>

<svelte:head>
    <title>Календар</title>
</svelte:head>

<Calendar events={data.events} />
