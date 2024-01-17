<template>
  <div class="events_details_container">
    <Head>
      <Title> {{ event.title }} </Title>
      <Meta name="description" :content="event.description" />
    </Head>
    <div v-if="event">
      <div class="event_img">
        <img :src="event.imageUrl" alt="event-image" />
      </div>
      <div class="event_details">
        <div class="first_section">
          <div class="__event_details">
            <h3>{{ event.title }}</h3>
            <div>
              <p>
                <Icon
                  name="material-symbols-light:calendar-today-outline-sharp"
                  color="#9B51E0"
                ></Icon>
                {{ formatDate(event.date) }}
              </p>
              <p>
                <Icon name="ic:round-access-time" color="#9B51E0"></Icon>
                {{
                  Number(event.time.slice(0, 2)) % 12 === 0
                    ? "12"
                    : Number(event.time.slice(0, 2)) % 12
                }}pm
              </p>
              <p>
                <Icon name="ph:map-pin-light" color="#9B51E0"></Icon>
                {{ event.address }}
              </p>
              <p>
                <Icon name="tabler:user" color="#9B51E0"></Icon
                >{{ event.organizer.name }}
              </p>
            </div>
          </div>
          <div class="__event_description">
            <h4>Event description</h4>
            <p>
              {{ event.description }}
            </p>
          </div>
          <div class="__event_ticket">
            <h4>Tickets Pricing</h4>
            <div class="pricing">
              <p>
                Single<br />
                <span id="price"
                  >NGN
                  {{ Number(event.price) <= 0 ? "Free" : event.price }}</span
                >
              </p>
              <p>
                Pair<br />
                <span id="price"
                  >NGN
                  {{ Number(event.price) <= 0 ? "Free" : event.price }}</span
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
              <a :href="`mailto:${event.organizer.email}`"
                ><img src="~/assets/icons/circle_email_icon.svg"
              /></a>

              <a :href="event.organizer.twitterUrl" target="_blank"
                ><Icon name="fa6-brands:square-twitter" color="#783EAD"></Icon
              ></a>
              <a :href="event.organizer.instagram" target="_blank"
                ><img src="~/assets/icons/square_instagram_icon.svg"
              /></a>
            </div>
          </div>
          <div class="map_direction">
            <h3>Directions</h3>
            <GoogleMap
              :api-key="config.public.googleMapKey"
              style="width: 100%; height: 500px"
              :center="center"
              :zoom="15"
            >
              <Marker :options="markerOptions" />
            </GoogleMap>
          </div>
        </div>
      </div>
    </div>
    <Spinner v-else />
  </div>
</template>

<script setup>
import "./styles.scss";
import Spinner from "../../components/reusables/Spinner.vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { useEventStore } from "../store/events";
import { storeToRefs } from "pinia";

const eventStore = useEventStore();
const { getEventbyID } = eventStore;
const { event } = storeToRefs(eventStore);
const config = useRuntimeConfig();
const center = reactive({ lat: 6.5801595, lng: 3.3400268 });
const markerOptions = { position: center, label: "E" };

onMounted(() => {
  getEventbyID(route.params.eventID);
});

useHead(() => ({
  script: [
    {
      src: `https://maps.google.com/maps/api/js?v=3&key=${config.public.googleMapKey}&callback=initialize"`,
    },
  ],
}));

const route = useRoute();

if (event.value) {
  center.lat = Number(event.value.lat);
  center.lng = Number(event.value.long);
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
