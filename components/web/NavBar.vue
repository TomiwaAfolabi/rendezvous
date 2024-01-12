<template>
  <div class="nav_main_container">
    <header class="nav_container">
      <NuxtLink to="/"
        ><img src="~/assets/img/rendevous.svg" alt="logo"
      /></NuxtLink>

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
      <div class="icon_cont" @click="toggleDropdown">
        <Icon name="material-symbols:menu-rounded" color="#783EAD" />
      </div>
    </header>

    <div class="mobile_nav">
      <nav
        class="mobile_nav_bar"
        :style="
          dropdownMenu
            ? 'display:block; visibility:visible; '
            : 'display: none;  visibility:hidden;  '
        "
      >
        <ul v-for="(link, index) in mobileLinks" :key="index">
          <NuxtLink
            ><li>{{ link }}</li></NuxtLink
          >
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import "./style.scss";
const links = reactive(["Discover", "About Us", "FAQs", "Contact Us"]);
const mobileLinks = reactive([
  "Discover",
  "About Us",
  "FAQs",
  "Contact Us",
  "Log in",
  "Sign Up",
]);
const dropdownMenu = ref(false);
const toggleDropdown = () => {
  dropdownMenu.value = !dropdownMenu.value;
};
</script>

<style lang="scss" scoped></style>
