import { defineStore } from "pinia";

export const useEventStore = defineStore("eventStore", () => {
  const events = ref(null);
  const event = ref(null);

  async function getEvents() {
    events.value = await $fetch("https://rendezvous-events.onrender.com/events")
      .then((data) => data.data.allEvents)
      .catch((err) => err);
  }
  async function searchCategory(category) {
    events.value = await $fetch(
      `https://rendezvous-events.onrender.com/events/search?${category}`
    )
      .then((data) => data.data.event)
      .catch((err) => err);
  }
  async function getEventbyID(id) {
    event.value = await $fetch(
      `https://rendezvous-events.onrender.com/events/${id}`
    )
      .then((data) => data.data.event)
      .catch((err) => err);
  }

  return { getEvents, events, searchCategory, getEventbyID, event };
});
