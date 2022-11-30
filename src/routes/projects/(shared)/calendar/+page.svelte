<script>
    import Calendar from '../../../../components/Calendar.svelte';
    export let data;
</script>

<svelte:head>
    <title>Календар</title>
</svelte:head>

<Calendar events={data.events} />
