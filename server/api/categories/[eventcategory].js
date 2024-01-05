export default defineEventHandler(async (event) => {
  const { eventcategory } = event.context.params;

  const { data } = await $fetch(
    `https://rendezvous-events.onrender.com/events/search?${eventcategory}`
  );

  return data;
});
