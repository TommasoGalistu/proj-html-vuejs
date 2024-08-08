<script >
import { store } from "../store";
export default {
  name: "FooterApp",
  data() {
    return {
      azienda: store.infoAzienda[0],
    };
  },
};
</script>

<template>
  <footer>
    <div class="sfondo">
      <div class="container primo">
        <div class="card info">
          <div class="contTitle">
            <div class="contImg">
              <img src="/logo.svg" alt="" />
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
          <div class="button">BUY NEXGEN</div>
        </div>
        <div class="card hoverEff">
          <div class="contTitle">
            <h3>Company</h3>
          </div>

          <ul>
            <li>Istitutional</li>
            <li>Social & Events</li>
            <li>Innovation</li>
            <li>Enviroment</li>
            <li>Technology</li>
          </ul>
        </div>
        <div class="card hoverEff">
          <div class="contTitle">
            <h3>Services</h3>
          </div>

          <ul>
            <li>Audit & Assurance</li>
            <li>Finalcial Advisory</li>
            <li>Analytics and M&A</li>
            <li>Middle Marketing</li>
            <li>Legal Consulting</li>
          </ul>
        </div>
        <div class="card hoverEff">
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
footer {
  z-index: 15;
}
.color {
  margin-left: 0.5rem;
}

.sfondo {
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  z-index: 10;
  width: 100%;
  background-color: #0d1b2a;
  .container.primo {
    z-index: 15;
    color: #928faa;
    padding: 4rem 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    .contTitle {
      .contImg {
        margin-bottom: 2rem;
        &:hover {
          cursor: pointer;
        }
      }
      h3 {
        margin: 3rem 0 2rem;
      }
      .text {
        margin-bottom: 2rem;
      }
    }
    .card {
      text-align: center;

      li {
        padding: 0.6rem 0;
        cursor: pointer;
        &:hover span {
          color: $colorStyleJamboHover;
        }
        &:hover {
          color: $colorStyleJamboHover;
        }
      }
      h3 {
        color: white;
      }
      span {
        color: #928faa;
      }
      .contImg {
        height: 3rem;
        img {
          height: 100%;
        }
      }
      width: calc(100% / 4);
    }
    .card.info {
      text-align: left;
    }
    .hoverEff {
      &:hover {
        animation: alzo 0.5s ease-in-out;
        animation-fill-mode: forwards;
      }
      @keyframes alzo {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-10px);
        }
      }
    }
  }
  .container.secondo {
    color: #95a5b8;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .button {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    border: 1px solid grey;
    margin: 1.5rem 0.5rem;
    cursor: pointer;
    &:hover {
      color: white;
      border: 1px solid white;
    }
  }
  .contIcon {
    display: flex;
    gap: 1rem;
    .hoverClass {
      &:hover {
        cursor: pointer;
        color: $colorStyleJamboHover;
      }
    }
  }
  .contText {
    &:hover {
      cursor: pointer;
      color: $colorStyleJamboHover;
    }
  }
}
</style>