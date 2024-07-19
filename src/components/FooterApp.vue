<script >
import { store } from "../store";
export default {
  name: "FooterApp",
  data() {
    return {
      azienda: store.infoAzienda,
    };
  },
};
</script>

<template>
  <footer>
    <div class="sfondo">
      <div class="container primo">
        <div class="card">
          <div class="contTitle">
            <div class="contImg">
              <img src="/public/logo.svg" alt="" />
            </div>
            <div class="text">
              <span
                >Built to the smallest detail with a focus on feature
                avaibility</span
              >
            </div>
            <ul>
              <li>
                <font-awesome-icon :icon="['fas', 'phone']" />
                <span class="color">{{ azienda.telefono }}</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <span class="color">{{ azienda.email }}</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                <span class="color">{{ azienda.luogo }}</span>
              </li>
            </ul>
          </div>
          <button>BUY NEXGEN</button>
        </div>
        <div class="card">
          <div class="contTitle">
            <h3>Company</h3>
          </div>
          <div class="text">
            <span
              >Built to the smallest detail with a focus on feature
              avaibility</span
            >
          </div>
          <ul>
            <li>Istitutional</li>
            <li>Social & Events</li>
            <li>Innovation</li>
            <li>Enviroment</li>
            <li>Technology</li>
          </ul>
        </div>
        <div class="card">
          <div class="contTitle">
            <h3>Services</h3>
          </div>
          <div class="text">
            <span
              >Built to the smallest detail with a focus on feature
              avaibility</span
            >
          </div>
          <ul>
            <li>Audit & Assurance</li>
            <li>Finalcial Advisory</li>
            <li>Analytics and M&A</li>
            <li>Middle Marketing</li>
            <li>Legal Consulting</li>
          </ul>
        </div>
        <div class="card">
          <div class="contTitle">
            <h3>Consultants</h3>
          </div>

          <ul>
            <li>David Cooper</li>
            <li>Oliver Jones</li>
            <li>Emma Lopez</li>
            <li>T. Johnson</li>
            <li>Jacob Hill Jr</li>
          </ul>
        </div>
      </div>
      <div class="container secondo">
        <div class="contText">
          <span
            >2024 - All rights reserved. Nexgen is maintained by Codings Group
          </span>
        </div>
        <div class="contIcon">
          <font-awesome-icon class="hoverClass" :icon="['fab', 'facebook-f']" />
          <font-awesome-icon class="hoverClass" :icon="['fab', 'twitter']" />
          <font-awesome-icon
            class="hoverClass"
            :icon="['fab', 'linkedin-in']"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;
.color {
  color: grey;
}
.sfondo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  z-index: 10;
  width: 100%;
  background-color: #0d1b2a;
  .container.primo {
    z-index: 10;
    color: grey;
    padding: 4rem 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    .card {
      li {
        padding: 0.5rem 0;
      }
      h3 {
        color: white;
      }
      span {
        color: grey;
      }
      .contImg {
        height: 3rem;
        img {
          height: 100%;
        }
      }
      width: calc(100% / 4);
    }
  }
  .container.secondo {
    color: white;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>