<template>
  <div v-for="(event, i) in events" :key="i" class="event_card">
    <div v-if="events && events.length > -1">
      <img :src="event.imageUrl" alt="event-image" />
      <div class="card_content">
        <div class="title">
          <h3>{{ event.title }}</h3>
          <p>
            {{ formatDate(event.date) }} <span> </span>
            {{
              Number(event.time.slice(0, 2)) % 12 === 0
                ? "12"
                : Number(event.time.slice(0, 2)) % 12
            }}
            pm
          </p>
        </div>
        <div class="description">
          <p>
            {{ formatDesc(event.description, 175) }}
          </p>
        </div>

        <div class="button" @click="setEventId(event.id)">
          View Details
          <Icon name="ph:arrow-up-right-bold" color="#432361" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>No events</p>
    </div>
  </div>
</template>

<script setup>
import "./styles.scss";

const { events } = defineProps(["events"]);

const formatDate = (date) => {
  const d = new Date(date);
  return d.toDateString();
};
const formatDesc = (description, length) => {
  if (description && description.length > length) {
    return description.slice(0, length) + "...";
  } else {
    return description;
  }
};
const setEventId = async (id) => {
  await navigateTo({
    path: `/event/${id}`,
  });
};
</script>

<style lang="scss" scoped></style>
