<template>
  <div class="hero_body_container">
    <div class="hero_head">
      <h1>Trending events</h1>
      <p>
        View all trending events
        <Icon name="ph:arrow-up-right-bold" color="#432361" />
      </p>
    </div>

    <div v-if="events && events.length > -1" class="event_card_container">
      <EventCard :events="events" />
    </div>

    <Spinner v-else />

    <div class="card_container_section">
      <div class="first_section">
        <p>Discover a World of Events Tailored Just for You.</p>
        <div class="view_btn">
          <button>View all event</button>
        </div>
      </div>
      <div class="second_section">
        <Card />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEventStore } from "../store/events";
import { storeToRefs } from "pinia";
import EventCard from "./reusables/EventCard.vue";
import Spinner from "./reusables/Spinner.vue";
import Card from "./reusables/Card.vue";
import "./styles.scss";

const eventStore = useEventStore();
const { getEvents } = eventStore;
const { events } = storeToRefs(eventStore);
onMounted(() => {
  getEvents();
});
</script>

<style lang="scss" scoped></style>
