<template>
  <div v-for="(event, i) in events" :key="i" class="event_card">
    <img src="assets/img/basketmount_img.svg" alt="event-image" />
    <div class="card_content">
      <h3>{{ event.event_title }}</h3>
      <p>Sun, Oct 3rd <span> </span> 6pm</p>
      <p>
        {{ event.event_descprition }}
      </p>
      <NuxtLink
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
