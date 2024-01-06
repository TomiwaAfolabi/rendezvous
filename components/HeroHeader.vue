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
              <p>{{ selectedCategory }}</p>
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
                <p class="item" @click="selectCategory(category)">
                  {{ category }}
                </p>
              </div>
            </div>
          </div>

          <div class="search_btn">
            <button @click="searchCategory(selectedCategory)">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./styles.scss";

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

const toggleCategory = () => {
  categoryDP.value = !categoryDP.value;
};
const selectCategory = (category) => {
  selectedCategory.value = category;
  categoryDP.value = false;
};

const searchCategory = async (category) => {
  const { data } = await useFetch(`/api/categories/${category}`).catch(
    (err) => err
  );
};
</script>

<style lang="scss" scoped></style>
