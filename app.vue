<template>
  <div class="body">
    <WebNavBar />
    <NuxtPage />
    <WebFooter />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/gilroy-bold");

.body {
  width: auto;
  max-width: 1440px;
  height: 100vh;
  margin: auto;
  font-family: "Gilroy-Bold", sans-serif;
}
</style>
