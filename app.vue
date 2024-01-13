<template>
  <div class="body">
    <WebNavBar />
    <NuxtPage />
    <WebFooter />
  </div>
</template>

<script setup>
onMounted(() => {});
</script>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/gilroy-bold");

.body {
  width: 100%;

  height: 100vh;

  font-family: "Gilroy-Bold", sans-serif;
}
</style>
