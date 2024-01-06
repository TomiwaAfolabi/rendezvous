<template>
  <div class="events_details_container">
    <div class="event_img">
      <img :src="data.event.imageUrl" alt="event-image" />
    </div>
    <div class="event_details">
      <div class="first_section">
        <div class="__event_details">
          <h3>{{ data.event.title }}</h3>
          <div>
            <p>
              <Icon
                name="material-symbols-light:calendar-today-outline-sharp"
                color="#9B51E0"
              ></Icon>
              {{ formatDate(data.event.date) }}
            </p>
            <p>
              <Icon name="ic:round-access-time" color="#9B51E0"></Icon>
              {{
                Number(data.event.time.slice(0, 2)) % 12 === 0
                  ? "12"
                  : Number(data.event.time.slice(0, 2)) % 12
              }}pm
            </p>
            <p>
              <Icon name="ph:map-pin-light" color="#9B51E0"></Icon>
              {{ data.event.address }}
            </p>
            <p>
              <Icon name="tabler:user" color="#9B51E0"></Icon
              >{{ data.event.organizer.name }}
            </p>
          </div>
        </div>
        <div class="__event_description">
          <h4>Event description</h4>
          <p>
            {{ data.event.description }}
          </p>
        </div>
        <div class="__event_ticket">
          <h4>Tickets Pricing</h4>
          <div class="pricing">
            <p>
              Single<br />
              <span id="price"
                >NGN
                {{
                  Number(data.event.price) <= 0 ? "Free" : data.event.price
                }}</span
              >
            </p>
            <p>
              Pair<br />
              <span id="price"
                >NGN
                {{
                  Number(data.event.price) <= 0 ? "Free" : data.event.price
                }}</span
              >
            </p>
          </div>
        </div>
        <div class="buy_btn">
          <button>Buy Now</button>
        </div>
      </div>
      <div class="second_section">
        <div class="contact_organizers">
          <h3>Contact Organizers</h3>
          <div class="social_media">
            <a :href="`mailto:${data.event.organizer.email}`"
              ><img src="~/assets/icons/circle_email_icon.svg"
            /></a>

            <a :href="data.event.organizer.twitterUrl" target="_blank"
              ><Icon name="fa6-brands:square-twitter" color="#783EAD"></Icon
            ></a>
            <a :href="data.event.organizer.instagram" target="_blank"
              ><img src="~/assets/icons/square_instagram_icon.svg"
            /></a>
          </div>
        </div>
        <div class="map_direction">
          <h3>Directions</h3>
          <GoogleMap
            style="width: 100%; max-width: 400px; height: 452px"
            :center="center"
            :zoom="15"
          >
            <Marker :options="markerOptions" />
          </GoogleMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./styles.scss";
import { GoogleMap, Marker } from "vue3-google-map";
const config = useRuntimeConfig();
const googleMapKey = config.googleMapKey;
const center = reactive({ lat: 6.5801595, lng: 3.3400268 });
const pageTitle = ref("");
const pageDescription = ref("");
const markerOptions = { position: center, label: "E" };

useHead(() => ({
  title: `${pageTitle.value}`,
  meta: [
    {
      name: "description",
      content: `${pageDescription.value}`,
    },
  ],
  script: [
    {
      src: `https://maps.googleapis.com/maps/api/js?key=${googleMapKey}`,
    },
  ],
}));

const route = useRoute();
const { data } = await useFetch(`/api/events/${route.params.eventID}`).catch(
  (err) => err
);

if (data) {
  center.lat = Number(data.value.event.lat);
  center.lng = Number(data.value.event.long);
  pageTitle.value = data.value.event.title;
  pageDescription.value = data.value.event.description;
}

const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>

<style lang="scss" scoped></style>
