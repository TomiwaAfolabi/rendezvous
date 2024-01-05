<template>
  <div v-for="(card, i) in cardData" :key="i" class="card">
    <div>
      <p>{{ card }}</p>
    </div>
  </div>
</template>

<script setup>
import "./styles.scss";
const cardData = ["Online Events", "Physical Events", "Hybrid Events"];
</script>

<style lang="scss" scoped>
.card {
}
</style>
