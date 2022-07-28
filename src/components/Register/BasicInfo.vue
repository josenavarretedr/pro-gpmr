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
      <select id="genere" required v-model="genere">
        <option
          v-for="(option, index) in genereOptions"
          :key="index"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
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
      />
      <label for="date">
        {{ dateDocText }}
        <input type="date" id="date" name="date" v-model="dateDoc" />
      </label>
    </div>
    <!-- Date -->
    <button id="saveInfoBTn" class="outline" @click="guardarBasicInfo(e)">
      GUARDAR
    </button>
  </article>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastName: "",
      docID: "",
      numDocument: "",
      genere: "",
      birthDate: "",
      dateDoc: "",
      phone: "",
      phoneAdicional: "",

      docOptions: [
        {
          value: "",
          text: "Documento de Identidad",
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
          value: "",
          text: "Genero",
        },
        {
          value: "M",
          text: "Masculino",
        },
        {
          value: "F",
          text: "Femenino",
        },
        {
          value: "O",
          text: "Otro",
        },
      ],
    };
  },
  methods: {
    saludar() {
      console.log(this.docID);
    },
    guardarBasicInfo() {
      let saveInfoBTn = document.getElementById("saveInfoBTn");
      saveInfoBTn.innerHTML = "Guardando...";
      saveInfoBTn.setAttribute("aria-busy", "true");
      setTimeout(() => {
        saveInfoBTn.innerHTML = "Guardar";
        saveInfoBTn.setAttribute("aria-busy", "false");
        console.log("guardarBasicInfo");
        console.log;
      }, 1000);
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

<style scoped>
article {
  padding: 1.25rem;
  /* overflow: hidden; */
}
</style>