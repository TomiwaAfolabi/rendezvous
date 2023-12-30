<template>
  <div class="nav_main_container">
    <header class="nav_container">
      <img src="~/assets/img/rendevous.svg" alt="logo" />
      <nav>
        <ul v-for="(link, index) in links" :key="index">
          <NuxtLink
            ><li>{{ link }}</li></NuxtLink
          >
        </ul>
      </nav>
      <div class="buttons">
        <NuxtLink class="btn">Log In</NuxtLink>
        <NuxtLink class="btn">Sign Up</NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup>
import "./style.scss";
const links = reactive(["Discover", "About Us", "FAQs", "Contact Us"]);
</script>

<style lang="scss" scoped></style>
