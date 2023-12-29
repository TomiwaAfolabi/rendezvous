<template>
  <div>
    <header class="container">
      <img src="~/assets/img/rendevous.svg" alt="logo" />
      <nav>
        <ul>
          <li>
            <NuxtLink><p>Discover</p></NuxtLink>
          </li>
          <li>
            <NuxtLink><p>About Us</p></NuxtLink>
          </li>
          <li>
            <NuxtLink><p>FAQs</p></NuxtLink>
          </li>
          <li>
            <NuxtLink><p>Contact Us</p></NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import "./style.scss";
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
