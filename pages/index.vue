<template>
  <div class="main_container">
    <HeroHeader />
    <HeroBody />
  </div>
</template>

<script setup>
import "./style.scss";
useHead({
  title: "Events",
  meta: [
    {
      name: "description",
      content: "All Events Page",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
