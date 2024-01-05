export default defineEventHandler(async (event) => {
  const { eventId } = event.context.params;

  const { data } = await $fetch(
    `https://rendezvous-events.onrender.com/events/${eventId}`
  );

  return data;
});
