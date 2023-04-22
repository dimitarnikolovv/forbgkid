<script>
    import EventList from './EventList.svelte';

    export let events;

    let currentDate;

    let date = new Date(),
        dates = [
            {
                day: 0,
                isActive: true,
                isToday: false,
                eventStatus: { hasEvents: false, showEventList: false },
                events: [{}],
            },
        ],
        currYear = date.getFullYear(),
        currMonth = date.getMonth();

    const months = [
        'Януари',
        'Февруари',
        'Март',
        'Април',
        'Май',
        'Юни',
        'Юли',
        'Август',
        'Септември',
        'Октомври',
        'Ноември',
        'Декември',
    ];

    function findEvents(year, month, dates = [], events = []) {
        events.forEach((event) => {
            const eventDate = new Date(event.attributes.startsAt);
            if (eventDate.getFullYear() === year && eventDate.getMonth() === month) {
                dates.forEach((date) => {
                    if (date.day === eventDate.getDate()) {
                        date.eventStatus.hasEvents = true;
                        date.events.push(event.attributes);
                    }
                });
            }
            if (eventDate.getFullYear() === year && eventDate.getMonth() === month - 1) {
                dates.forEach((date) => {
                    if (
                        date.isActive === false &&
                        date.position === 'last' &&
                        date.day === eventDate.getDate()
                    ) {
                        date.eventStatus.hasEvents = true;
                        date.events.push(event.attributes);
                    }
                });
            }
            if (eventDate.getFullYear() === year && eventDate.getMonth() === month + 1) {
                dates.forEach((date) => {
                    if (
                        date.isActive === false &&
                        date.position === 'next' &&
                        date.day === eventDate.getDate()
                    ) {
                        date.eventStatus.hasEvents = true;
                        date.events.push(event.attributes);
                    }
                });
            }
        });
    }

    function renderCalendar() {
        let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(),
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

        dates = [];

        currentDate = `${months[currMonth]} ${currYear}`;

        for (let i = firstDayofMonth; i > 0; i--) {
            dates.push({
                day: lastDateofLastMonth - i + 1,
                isActive: false,
                position: 'last',
                eventStatus: { hasEvents: false, showEventList: false },
                events: [],
            });
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            let isToday =
                i === date.getDate() &&
                currMonth === new Date().getMonth() &&
                currYear === new Date().getFullYear();

            dates.push({
                day: i,
                isActive: true,
                isToday,
                eventStatus: { hasEvents: false, showEventList: false },
                events: [],
            });
        }

        if (lastDayofMonth > 0) {
            for (let i = lastDayofMonth; i <= 6; i++) {
                dates.push({
                    day: i - lastDayofMonth + 1,
                    isActive: false,
                    position: 'next',
                    eventStatus: { hasEvents: false, showEventList: false },
                    events: [],
                });
            }
        }

        findEvents(currYear, currMonth, dates, events);
    }

    renderCalendar();

    function iconOnClick(e) {
        currMonth = e.target.id === 'prev' ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
</svelte:head>

<div class="wrapper">
    <header>
        <p class="current-date">{currentDate}</p>
        <div class="icons">
            <span
                id="prev"
                on:click={iconOnClick}
                on:keypress={iconOnClick}
                class="material-symbols-rounded">chevron_left</span
            >
            <span
                id="next"
                on:click={iconOnClick}
                on:keypress={iconOnClick}
                class="material-symbols-rounded">chevron_right</span
            >
        </div>
    </header>
    <div class="calendar">
        <ul class="weeks">
            <li>П</li>
            <li>В</li>
            <li>С</li>
            <li>Ч</li>
            <li>П</li>
            <li>С</li>
            <li>Н</li>
        </ul>
        <ul class="days">
            {#each dates as date}
                <li class:inactive={!date.isActive} class:today={date?.isToday}>
                    <span>{date.day}</span>
                    {#if date.eventStatus.hasEvents === true}
                        <div class="indicator" />

                        <div class="events">
                            {#each date.events as event}
                                <div
                                    class="event-preview"
                                    on:click={() => {
                                        date.eventStatus.showEventList = true;
                                    }}
                                    on:keypress={() => {
                                        date.eventStatus.showEventList = true;
                                    }}
                                >
                                    <p>{event.title}</p>
                                </div>
                            {/each}
                        </div>
                    {/if}
                </li>
                {#if date.eventStatus.showEventList}
                    <EventList
                        events={date.events}
                        date={{ day: date.day, month: months[currMonth] }}
                        onClose={() => {
                            date.eventStatus.showEventList = false;
                        }}
                    />
                {/if}
            {/each}
        </ul>
    </div>
</div>

<style lang="scss">
    .wrapper {
        width: 100%;
        height: fit-content;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    }
    .wrapper header {
        display: flex;
        align-items: center;
        padding: 25px 30px 10px;
        justify-content: space-between;

        .current-date {
            font-size: 1.45rem;
            font-weight: 500;
        }

        .icons {
            display: flex;

            span {
                height: 38px;
                width: 38px;
                margin: 0 1px;
                cursor: pointer;
                color: #878787;
                text-align: center;
                line-height: 38px;
                font-size: 1.9rem;
                user-select: none;
                border-radius: 50%;

                &:last-child {
                    margin-right: -10px;
                }

                &:hover {
                    background: #f2f2f2;
                }
            }
        }
    }

    .calendar {
        padding: 20px;

        ul {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            text-align: center;

            li {
                color: #333;
                width: calc(100% / 7);
                font-size: 1.07rem;
            }
        }

        ul.weeks {
            margin-block-end: 30px;
            li {
                font-weight: 600;
                cursor: default;
            }
        }

        .days {
            position: relative;
            margin-bottom: 20px;

            li {
                z-index: 1;
                cursor: pointer;
                position: relative;
                height: 5rem;
                padding-block: 0.3rem;

                .events {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    gap: 0.3em;
                    margin-block-start: 0.3em;
                    overflow-y: auto;
                    max-width: 100%;
                    max-height: 70%;

                    &::-webkit-scrollbar {
                        width: 1px;
                    }
                }

                .event-preview {
                    border-radius: 10px;
                    margin-inline: auto;
                    width: fit-content;
                    max-width: 100%;
                    min-height: 1.6em;
                    height: 1.6em;
                    overflow: hidden;

                    p {
                        background-color: wheat;
                        padding: 0.2em;
                        border-radius: 10px;
                        margin: 0;
                        font-size: 0.6rem;
                    }
                }

                &.inactive {
                    color: #aaa;
                }

                &.today {
                    color: #fff;

                    &::before {
                        background: #9b59b6;
                    }
                }

                &::before {
                    position: absolute;
                    z-index: -1;
                    content: '';
                    left: 50%;
                    top: 18%;
                    height: 1.6em;
                    width: 1.6em;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                }

                &:not(.today):hover::before {
                    background: #f2f2f2;
                }

                .indicator {
                    position: absolute;
                    top: 30%;
                    left: calc(50% - 0.2em);
                    background-color: rgb(255, 52, 75);
                    width: 0.4em;
                    height: 0.4em;
                    border-radius: 50%;
                }
            }
        }
    }
</style>
