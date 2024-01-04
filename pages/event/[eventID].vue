<template>
  <div class="events_details_container">
    <div class="event_img">
      <img src="assets/img/basketmount_img.svg" alt="event-image" />
    </div>
    <div class="event_details">
      <div class="first_section">
        <div class="__event_details">
          <h3>I said what I said Live Show</h3>
          <div>
            <p>
              <Icon
                name="material-symbols-light:calendar-today-outline-sharp"
                color="#9B51E0"
              ></Icon>
              Sunday, October 3rd, 2023
            </p>
            <p><Icon name="ic:round-access-time" color="#9B51E0"></Icon> 6pm</p>
            <p>
              <Icon name="ph:map-pin-light" color="#9B51E0"></Icon> Race Course,
              8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island
              102273, Lagos
            </p>
            <p><Icon name="tabler:user" color="#9B51E0"></Icon>FK, Jollz</p>
          </div>
        </div>
        <div class="__event_description">
          <h4>Event description</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div class="__event_ticket">
          <h4>Tickets Pricing</h4>
          <div class="pricing">
            <p>
              Single<br />
              <span id="price">NGN 5,000</span>
            </p>
            <p>
              Pair<br />
              <span id="price">NGN 5,000</span>
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
            <img src="~/assets/icons/circle_email_icon.svg" />
            <Icon name="fa6-brands:square-twitter" color="#783EAD"></Icon>
            <img src="~/assets/icons/square_instagram_icon.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./styles.scss";
</script>

<style lang="scss" scoped></style>
