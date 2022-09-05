<template>
  <div class="container">
    <hgroup>
      <h1>Formulario de Registro</h1>
      <small
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente
        natus incidunt autem sint voluptatem.</small
      >
    </hgroup>
    <BasicInfo v-if="registerStore.views.basicInfo"></BasicInfo>
    <!-- <ContactInfo v-if="registerStore.views.contactInfo" ></ContactInfo> -->
    <ContactInfo v-if="registerStore.views.contactInfo"></ContactInfo>
    <ServicesRequired
      v-if="registerStore.views.servicesRequired"
    ></ServicesRequired>
    <BusinessInfo v-if="registerStore.views.businessInfo"></BusinessInfo>
    <button @click="peru()">Peru</button>
  </div>
</template>

<script>
// COMPONENTES
import BasicInfo from "@/components/Register/BasicInfo.vue";
import ContactInfo from "@/components/Register/ContactInfo.vue";
import ServicesRequired from "@/components/Register/ServicesRequired.vue";
import BusinessInfo from "@/components/Register/BusinessInfo.vue";

import { mapState } from "vuex";

// VE: https://github.com/jobsamuel/venezuela-js/blob/master/DOCUMENTACION.md
// CO : https://github.com/marcovega/colombia-json
// PA: https://gist.githubusercontent.com/kurai021/6861a00e65efb6e9cc3fd6b41248aee6/raw/6ae3024d33d2a8990f0420660d5fe092a14fc0e2/Panama.json
// RD: https://github.com/raydelto/provincias_dominicanas_api
// EC: https://gist.github.com/emamut/6626d3dff58598b624a1
export default {
  name: "RegisterView",
  components: {
    BasicInfo,
    ContactInfo,
    ServicesRequired,
    BusinessInfo,
  },
  computed: {
    ...mapState(["registerStore"]),
  },
  methods: {
    async peru() {
      const requestURLProvi =
        "https://raw.githubusercontent.com/ernestorivero/Ubigeo-Peru/master/json/ubigeo_peru_2016_provincias.json";
      // const request = new XMLHttpRequest();
      // request.open("GET", requestURLProvi);
      // request.responseType = "json";
      // request.send();
      // request.onload = function () {
      //   const provinciasPeru = request.response;
      // };
      const response = await fetch(requestURLProvi);
      const provinciasPeru = await response.json();
      // console.log(provinciasPeru);

      const requestURLCol =
        "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";

      const response2 = await fetch(requestURLCol);
      const colombia = await response2.json();
      console.log(colombia);

      let xProvincia = provinciasPeru.filter(
        (provincia) => provincia.department_id === "14"
      );
      console.log(xProvincia);

      // fetch(requestURLProvi)
      //   .then((response) => response.json())
      //   .then((data) => console.log(data));
    },
  },
};
</script>

<style scoped>
article div {
  padding: 1rem;
}

@media (min-width: 576px) {
  article div {
    transition: all 0.3s ease-in-out;
    padding: 1.25rem;
  }
}

@media (min-width: 768px) {
  article div {
    padding: 1.5rem;
  }
}

@media (min-width: 992px) {
  article div {
    padding: 1.75rem;
  }
}

@media (min-width: 1200px) {
  article div {
    padding: 2rem;
  }
}

/* Hero Image */
article div:nth-of-type(2) {
  display: none;
  background-color: #374956;
  background-image: url("https://source.unsplash.com/8jeWeKdygfk/1000x1200");
  background-position: center;
  background-size: cover;
}

@media (min-width: 992px) {
  .grid > div:nth-of-type(2) {
    display: block;
  }
}
</style>
