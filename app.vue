<template>
  <div class="body">
    <NavBar />
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
  max-width: 1440px;
  margin: auto;
  width: 100vw;
  height: 100vh;
  font-family: "Gilroy-Bold", sans-serif;
}
</style>
