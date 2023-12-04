<template>
  <div class="hero_container">
    <div class="content">
      <h1>
        Ready to Rock? Discover the Hottest Events Here – Your Calendar's New
        Best Friend!
      </h1>

      <div class="search_input">
        <div class="input__container">
          <div class="field">
            <Icon name="ph:magnifying-glass" color="black" />
            <input type="text" placeholder="Search for an event" />
          </div>
          <div class="categories_filter">
            <div class="menu">
              <p>Categories</p>
              <Icon
                name="material-symbols:keyboard-arrow-down"
                color="black"
                @click="toggleCategory()"
              />
            </div>

            <div class="dropdown" v-if="categoryDP">
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="items"
              >
                <p class="item">{{ category }}</p>
              </div>
            </div>
          </div>
          <div class="search_btn">
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./styles.scss";
const categoryDP = ref(false);
const categories = reactive(["Music", "Podcast", "Comedy"]);

const toggleCategory = () => {
  categoryDP.value = !categoryDP.value;
};
</script>

<style lang="scss" scoped></style>
