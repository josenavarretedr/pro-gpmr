<template>
  <article class="container">
    <hgroup>
      <h3>Información Básica</h3>
      <small>Esta información nos ayuda a conocerte mejor.</small>
    </hgroup>
    <div class="grid">
      <input
        type="text"
        name="name"
        placeholder="Nombres completos"
        aria-label="Nombres"
        required
        v-model="name"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Apellidos completos"
        aria-label="Apellidos"
        required
        v-model="lastName"
      />
    </div>
    <div class="grid">
      <!-- <select id="genere" required v-model="genere">
        <option
          v-for="(option, index) in genereOptions"
          :key="index"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select> -->
      <fieldset class="genereRadios">
        <legend>Género</legend>
        <div class="genereRadios-div">
          <label
            v-for="(option, index) in genereOptions"
            :key="index"
            :for="option.value"
          >
            <input
              type="radio"
              :id="option.value"
              name="size"
              :value="option.value"
              v-model="genereChecked"
            />
            {{ option.text }}
            <i :class="option.icon"></i>
          </label>
        </div>
      </fieldset>
      <label for="birthDate">
        Fecha de nacimiento 🎂
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          v-model="birthDate"
        />
      </label>
    </div>
    <div class="grid">
      <select id="docID" required v-model="docID">
        <option
          v-for="(option, index) in docOptions"
          :key="index"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <input
        style="height: auto"
        type="text"
        name="numDocument"
        placeholder="Número de documento"
        aria-label="Documento"
        required
        v-model="numDocument"
      />
      <label for="date">
        {{ dateDocText }}
        <input type="date" id="date" name="date" v-model="dateDoc" />
      </label>
    </div>
    <!-- Date -->
    <button id="saveBasicInfoBtn" class="outline" @click="guardarData()">
      GUARDAR
    </button>
  </article>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      lastName: "",
      genereChecked: "",
      birthDate: "",
      docID: "",
      numDocument: "",
      dateDoc: "",

      docOptions: [
        {
          value: "",
          text: "Selecciona un documento...",
        },
        {
          value: "CI",
          text: "Cédula de Identidad",
        },
        {
          value: "CE",
          text: "Carné de Extranjería",
        },
        {
          value: "Pasaporte",
          text: "Pasaporte",
        },
        {
          value: "CPP",
          text: "CPP",
        },
      ],
      genereOptions: [
        {
          value: "M",
          text: "Masculino",
          icon: "fa-solid fa-mars",
        },
        {
          value: "F",
          text: "Femenino",
          icon: "fa-solid fa-venus",
        },
        {
          value: "O",
          text: "Otro",
          icon: "fa-solid fa-venus-mars",
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      setBasicInfoStore: "registerStore/setBasicInfo",
      setViewsStore: "registerStore/setViews",
    }),
    guardarData() {
      let saveBasicInfoBtn = document.getElementById("saveBasicInfoBtn");
      saveBasicInfoBtn.innerHTML = "Guardando...";
      saveBasicInfoBtn.setAttribute("aria-busy", "true");
      this.setBasicInfoStore({
        name: this.name,
        lastName: this.lastName,
        genereChecked: this.genereChecked,
        birthDate: this.birthDate,
        docID: this.docID,
        numDocument: this.numDocument,
        dateDoc: this.dateDoc,
      });
      setTimeout(() => {
        saveBasicInfoBtn.innerHTML = "Guardar";
        saveBasicInfoBtn.setAttribute("aria-busy", "false");
        this.setViewsStore('contactInfo');
      }, 700);
    },
  },
  computed: {
    dateDocText() {
      let textFecha = this.docOptions.filter((option) => {
        if (option.value === this.docID) {
          return option;
        }
      });

      if (this.docID === "") {
        return "Fecha de vencimiento de tu documento de identidad";
      } else {
        return `Fecha de vencimiento de tu ${textFecha[0].text}`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
article {
  padding: 1.25rem;
  /* overflow: hidden; */
}

.genereRadios {
  &-div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
}
</style>