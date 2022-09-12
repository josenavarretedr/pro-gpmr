<template>
  <article class="container">
    <hgroup>
      <h3>Información Básica</h3>
      <small>Esta información nos ayuda a conocerte mejores.</small>
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
      <!-- <label for="date">
        {{ dateDocText }}
        <input type="date" id="date" name="date" v-model="dateDoc" />
      </label> -->
    </div>
    <div class="grid">
      <select id="country" required v-model="country">
        <option value="">Seleccione un país</option>
        <option
          v-for="(option, index) in countries.sort((a, b) =>
            a.name.localeCompare(b.name)
          )"
          :key="index"
          :value="option.code"
        >
          {{ option.name }} {{ option.emoji }}
        </option>
      </select>
      <div class="departament">
        <input
          type="text"
          name="departament"
          placeholder="Región/Estado/Departamento"
          aria-label="Región/Estado/Departamento"
          required
          v-model="departamentIDSelected"
          v-if="!priorityCountry"
        />
        <select v-else id="departament" required v-model="departamentIDSelected">
          <option value="">Seleccione un departamento</option>
          <option
            v-for="(option, index) in departaments"
            :key="index"
            :value="option.id"
          >
            {{ option.name }}
          </option>
        </select>
      </div>

      <div class="provinces" v-if="this.departamentIDSelected !== ''">
        <input
          type="text"
          name="province"
          placeholder="Ciudad"
          aria-label="Ciudad"
          required
          v-model="provinceSelected"
          v-if="!priorityCountry"
        />
        <select v-else id="province" required v-model="provinceSelected">
          <option value="">Seleccione una ciudad</option>
          <option
            v-for="(option, index) in provincesToShow"
            :key="index"
            :value="option.name"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
    </div>
    <!-- <button @click="provincesToShow()">Prueba Peru</button> -->

    <!-- Date -->
    <button id="saveBasicInfoBtn" class="outline" @click="guardarData()">
      GUARDAR
    </button>
  </article>
</template>

<script>
import { mapActions } from "vuex";
import provinciasPeru from "@/assets/data/peru/provinciasPeru.js";
import colombiaAll from "@/assets/data/colombia/colombiaAll.js";

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
      countries: [],
      country: "",
      priorityCountry: false,
      departaments: [],
      departamentIDSelected: '',
      provinces: [],
      provinceSelected: "",
    };
  },
  methods: {
    ...mapActions({
      setBasicInfoStore: "registerStore/setBasicInfo",
      setViewsStore: "registerStore/setViews",
    }),
    async getPeru() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/ernestorivero/Ubigeo-Peru/master/json/ubigeo_peru_2016_departamentos.json"
        );
        const data = await response.json();
        this.departaments = data;
        this.priorityCountry = true;
      } catch (error) {
        console.log(error);
      }
    },
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
        this.setViewsStore("contactInfo");
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
    provincesToShow() {
      if (this.country === "PE") {
        let resultados = provinciasPeru.filter(
          (provincia) => provincia.department_id === this.departamentIDSelected
        );
        return resultados;
      } else if (this.country === "CO") {
        let getDataFiltered = colombiaAll.filter(
          (departamento) => departamento.id === this.departamentIDSelected
        );
        let resultados = [];
        getDataFiltered[0].provinces.forEach((provincia) => {
          resultados.push({
            name: provincia,
          });
        });
        return resultados;
      } else {
        return "hola";
      }
    },
  },
  created() {
    const requestURLProvi =
      "https://raw.githubusercontent.com/risan/country-flag-emoji-json/main/dist/index.json";

    async function getCountries() {
      const response = await fetch(requestURLProvi);
      const data = await response.json();
      return data;
    }

    getCountries().then((data) => {
      this.countries = data;
    });
  },
  watch: {
    country(newCountry) {
      this.priorityCountry = false;

      if (newCountry === "PE") {
        this.getPeru();
      } else if (newCountry === "CO") {
        this.getColombia();
      } else {
        this.priorityCountry = false;
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