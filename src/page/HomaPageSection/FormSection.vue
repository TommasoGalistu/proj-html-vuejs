<script>
import { store } from "../../store";
export default {
  name: "FormSection",
  data() {
    return {
      azienda: store.infoAzienda[0],

      formData: {
        name: "",
        email: "",
        phone: "",
        options: "",
        text: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (this.validateForm()) {
        try {
          const response = await fetch("/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.formData),
          });
          const data = await response.json();
          console.log("Success:", data);
          alert("Form submitted successfully!");
        } catch (error) {
          console.error("Error:", error);
          alert("Error submitting form!");
        }
      } else {
        alert("Please fill out all fields.");
      }
    },
    validateForm() {
      const { name, email, phone, options, text } = this.formData;
      return name && email && phone && options && text;
    },
  },
};
</script>
<template>
  <div class="sfondo">
    <div class="imgSfondo"></div>

    <div class="container">
      <div class="contForm">
        <span>SEND A MESSAGE</span>
        <h2>
          Get in
          <span class="evidenziata"
            ><h2>Touch</h2>
            <span class="sottolineatura"></span
          ></span>
        </h2>
        <p>We will respond to your message as soon as possible.</p>
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div>
              <input
                type="text"
                v-model="formData.name"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                v-model="formData.email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div class="row">
            <div>
              <input
                type="tel"
                v-model="formData.phone"
                placeholder="Telephone number"
                required
              />
            </div>
            <div>
              <select v-model="formData.options" required>
                <option value="" disabled selected>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
                <option value="option5">Option 5</option>
              </select>
            </div>
          </div>
          <div class="contTextArea">
            <textarea
              v-model="formData.text"
              cols="30"
              rows="10"
              placeholder="Enter your message here..."
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="contContact">
        <h2>Example Inc.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div class="contatti">
          <div class="iconStyle">
            <font-awesome-icon :icon="['fas', 'phone']" />
          </div>
          <span>{{ azienda.telefono }}</span>
        </div>
        <div class="contatti">
          <div class="iconStyle">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </div>
          <span>{{ azienda.email }}</span>
        </div>
        <div class="contatti">
          <div class="iconStyle">
            <font-awesome-icon :icon="['fas', 'location-dot']" />
          </div>
          <span>{{ azienda.luogo }}</span>
        </div>
        <div class="button"><span>VIEW MAP</span></div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@use "../../style/partials/variable.scss" as *;
@use "../../style/partials/mixin.scss" as *;
@use "../../style/general.scss" as *;

.sfondo {
  position: relative;
  background-color: white;
  width: 100%;

  .container {
    padding: 4rem 0;
    display: flex;
    gap: 3rem;
    z-index: 5;

    .contForm {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 70%;
      z-index: 5;
      span {
        color: $colorStyleJambo;
        z-index: 5;
      }
      h2 {
        font-size: 3rem;
        display: inline;
        padding: 1rem 0;
        z-index: 5;
      }
      .row {
        display: flex;
        gap: 1rem;
        padding-bottom: 1rem;
        z-index: 5;

        & > div {
          flex: 1;
        }
      }

      .contTextArea {
        width: 100%;
        z-index: 5;
        textarea {
          max-width: 100%;
          min-width: 100%;
          max-height: 13rem;
          min-height: 8rem;
          padding: 10px;
          margin-top: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
          background-color: #ececec;
          border: none;
          z-index: 5;
          &:focus {
            outline: none;
            box-shadow: none;
            border-color: transparent;
          }
        }
      }

      input,
      select {
        border: none;
        background-color: #ececec;
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 16px;
        &:focus {
          outline: none;
          box-shadow: none;
          border-color: transparent;
        }
      }

      button {
        z-index: 5;
        // width: 100%;
        margin-top: 1rem;
        background-color: $colorStyleJambo;
        color: white;
        cursor: pointer;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
      }

      button:hover {
        background-color: $colorStyleJamboHover;
      }
    }
    .contContact {
      width: 30%;

      h2,
      p {
        padding-bottom: 1rem;
      }

      .contatti {
        padding: 1.5rem 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: $colorStyleJambo;
        cursor: pointer;
        &:hover .iconStyle {
          color: white;
          background-color: $colorStyleJambo;
        }

        .iconStyle {
          display: flex;
          align-items: center;
          font-size: 1.3rem;

          padding: 0.7rem;
          background-color: #d9f2f2;
          border-radius: 50%;
        }
      }
    }
  }
}
.button {
  z-index: 20;
  margin-top: 2rem;
  @include button-styles(0.5rem 1rem, 0.4rem);
}
span {
  z-index: 5;
}

// immagini sfondo in absolute
.imgSfondo {
  position: absolute;
  z-index: 0;
  width: 100%;
  top: 0rem;
  left: 0rem;
  height: 42.8rem;
  background-repeat: no-repeat;
  background-image: url("/prova.svg");

  background-attachment: fixed;
}
</style>