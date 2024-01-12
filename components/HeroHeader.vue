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
            <select v-model="selectedCategory" class="menu">
              <option
                v-for="(category, index) in categories"
                :key="index"
                :value="`${category}`"
              >
                {{ category }}
              </option>
              <option value="volvo">Volvo</option>
            </select>
          </div>

          <div class="search_btn">
            <button @click="search()">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./styles.scss";
import { useEventStore } from "../store/events";
import { storeToRefs } from "pinia";
const eventStore = useEventStore();
const { searchCategory, getEvents } = eventStore;

const categoryDP = ref(false);
const categories = reactive([
  "All",
  "Comedy",
  "Religious",
  "Tech",
  "Health",
  "Fitness",
  "Sports",
  "Education",
]);
const selectedCategory = ref("All");

const search = () => {
  if (selectedCategory.value === "All") {
    getEvents();
  } else {
    searchCategory(selectedCategory.value);
  }
};
</script>

<style lang="scss" scoped></style>
