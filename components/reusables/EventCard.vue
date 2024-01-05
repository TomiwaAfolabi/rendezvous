<template>
  <div v-for="(event, i) in events.allEvents" :key="i" class="event_card">
    <img :src="event.imageUrl" alt="event-image" />
    <div class="card_content">
      <h3>{{ event.title }}</h3>
      <p>Sun, Oct 3rd <span> </span> 6pm</p>
      <p>
        {{ event.description }}
      </p>
      <NuxtLink :to="`/event/${event.id}`"
        >View Details
        <Icon name="ph:arrow-up-right-bold" color="#432361" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import "./styles.scss";
const { events } = defineProps(["events"]);
</script>

<style lang="scss" scoped></style>
