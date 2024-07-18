<script >
import { router } from "../router";
import { store } from "../store";
export default {
  name: "HeaderApp",
  data() {
    return {
      routes: router.options.routes,
      store,
      isHidden: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.isHidden = true;
        this.isFixed = true;
        console.log("true");
      } else {
        this.isHidden = false;
        this.isFixed = false;
        console.log("false");
      }
    },
  },
  mounted() {
    // Aggiungi un listener per l'evento scroll sulla finestra
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Rimuovi il listener per l'evento scroll dalla finestra
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <header :class="{ fixed: isHidden }">
    <div class="cont banner" v-if="!isHidden">
      <div class="container">
        <div class="text">
          <span class="contDetails"
            ><font-awesome-icon :icon="['fas', 'clock']" /><span
              >Open Hours: {{ store.infoAzienda[0].orariApertura }}</span
            ></span
          >
        </div>
        <div class="contact">
          <span class="contDetails"
            ><font-awesome-icon :icon="['fas', 'phone']" /><span>{{
              store.infoAzienda[0].telefono
            }}</span></span
          >

          <span class="contDetails"
            ><font-awesome-icon :icon="['fas', 'envelope']" /><span>{{
              store.infoAzienda[0].email
            }}</span></span
          >

          <font-awesome-icon class="hoverClass" :icon="['fab', 'facebook-f']" />
          <font-awesome-icon class="hoverClass" :icon="['fab', 'twitter']" />
          <font-awesome-icon
            class="hoverClass"
            :icon="['fab', 'linkedin-in']"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="contImg">
        <img src="/logo.svg" alt="foto logo nexgen" />
      </div>
      <div class="flexa">
        <ul>
          <li v-for="(route, index) in routes" :key="index">
            <router-link class="link" :to="{ name: route.name }">{{
              route.name
            }}</router-link>

            <div class="window">
              <ul>
                <li v-for="(route, index) in routes" :key="index">
                  <router-link class="link" :to="{ name: route.name }">{{
                    route.name
                  }}</router-link>
                </li>
              </ul>
            </div>
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </li>
        </ul>
        <span class="button">Shop</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;
.fixed {
  background-color: #0e1e2e;
  color: grey;
}

header {
  position: fixed;
  top: 0;
  z-index: 100;

  width: 100%;

  .cont.banner {
    color: grey;
    background-color: #0e1e2e;
    height: 3rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    .contDetails {
      display: flex;
      gap: 0.5rem;
    }
    .contDetails,
    .hoverClass {
      &:hover {
        color: $colorStyleJamboHover;
        cursor: pointer;
      }
    }
    .contact {
      display: flex;
      gap: 1.5rem;
    }
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .contImg {
      height: 2.8rem;

      img {
        height: 100%;
      }
    }
    .flexa {
      display: flex;
      align-items: center;
      .button {
        padding: 0.5rem 1rem;
        background-color: #c2dcdf;
        border-radius: 30px;

        &:hover {
          background-color: #d5f0f3;
          cursor: pointer;
        }
      }

      ul {
        display: flex;
        list-style: none;

        li {
          padding: 1rem;
          position: relative;

          &:hover .window {
            display: block;
          }

          .link {
            text-decoration: none;
            padding: 1rem 2rem;
            color: grey;
            &:hover {
              color: #88b6c9;
            }
          }
          .window {
            background-color: white;
            z-index: 100;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            position: absolute;
            display: none;

            ul {
              display: block;
              li {
                padding: 0.5rem 1rem;
                border-left: 4px solid rgb(218, 218, 218);
                &:hover {
                  border-left: 4px solid #88b6c9;
                }
                .link {
                  padding: 0.5rem 1rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>