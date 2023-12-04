<template>
  <div class="hero_body_container">
    <div class="hero_head">
      <h1>Trending events</h1>
      <p>
        View all trending events
        <Icon name="ph:arrow-up-right-bold" color="#432361" />
      </p>
    </div>

    <div class="event_card_container">
      <EventCard :events="eventsData" />
    </div>
    <div class="card_container_section">
      <div class="first_section">
        <p>Discover a World of Events Tailored Just for You.</p>
        <div class="view_btn">
          <button>View all event</button>
        </div>
      </div>
      <div class="second_section">
        <div class="card">
          <div>
            <p>Online Events</p>
          </div>
          <div>
            <p>Physical Events</p>
          </div>
          <div>
            <p>Hybrid Events</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EventCard from "./reusables/EventCard.vue";
import "./styles.scss";
const eventsData = [
  {
    event_title: "ISWIS Live show",
    event_descprition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi u  aliquip ex ea commodo consequat.",
    event_image: "assets/img/ISWIS_event__img.svg",
  },
  {
    event_title: "Nartive 5 Live show",
    event_descprition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi u  aliquip ex ea commodo consequat.",
    event_image: "assets/img/basketmount_img.svg",
  },
  {
    event_title: "BasketMouth Live show",
    event_descprition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi u  aliquip ex ea commodo consequat.",
    event_image: "assets/img/Nativ5.svg",
  },
];
</script>

<style lang="scss" scoped></style>
