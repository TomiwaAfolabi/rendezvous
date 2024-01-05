export default defineEventHandler(async (event) => {
  const { data } = await $fetch(
    "https://rendezvous-events.onrender.com/events"
  );

  return data;
});
