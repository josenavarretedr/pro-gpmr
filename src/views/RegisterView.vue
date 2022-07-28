<template>
  <div class="container">
    <hgroup>
      <h1>Formulario de Registro</h1>
      <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente natus incidunt autem sint voluptatem.</small>
    </hgroup>
    <BasicInfo></BasicInfo>
    <ContactInfo></ContactInfo>
    <ServicesRequired></ServicesRequired>
    <BusinessInfo></BusinessInfo>
  </div>
</template>

<script>
import BasicInfo from "@/components/Register/BasicInfo.vue";
import ContactInfo from "@/components/Register/ContactInfo.vue";
import ServicesRequired from "@/components/Register/ServicesRequired.vue";
import BusinessInfo from "@/components/Register/BusinessInfo.vue";

export default {
  name: "RegisterView",
  components: {
    BasicInfo,
    ContactInfo,
    ServicesRequired,
    BusinessInfo,
  },
};
</script>

<style scoped>

article div {
  padding: 1rem;
}

@media (min-width: 576px) {

  article div {
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
