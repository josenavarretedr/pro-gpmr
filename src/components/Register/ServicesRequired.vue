<template>
  <article class="container">
    <hgroup>
      <h3>Selección de servicios</h3>
      <small>Para poder contactarte más adelante.</small>
    </hgroup>
    <!-- Checkboxes -->
    <fieldset>
      <div class="servicie grid">
        <div class="servicie-input">
          <input type="checkbox" id="psico" name="psico" />
        </div>
        <label for="psico">
          <hgroup>
            <h5>Servicio de Psicología</h5>
            <small
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur dolores suscipit voluptas vero, consequatur cum non
              eius officia ut molestiae!</small
            >
          </hgroup>
        </label>
      </div>

      <div class="servicie grid">
        <div class="servicie-input">
          <input type="checkbox" id="legal" name="legal" />
        </div>
        <label for="legal">
          <hgroup>
            <h5>Servicio de Legal</h5>
            <small
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur dolores suscipit voluptas vero, consequatur cum non
              eius officia ut molestiae!</small
            >
          </hgroup>
        </label>
      </div>

      <div class="servicie grid">
        <div class="servicie-input">
          <input type="checkbox" id="MdV" name="MdV" />
        </div>
        <label for="MdV">
          <hgroup>
            <h5>Servicio de Medios de Vida</h5>
            <small
              >dolores suscipit voluptas vero, consequatur cum non eius officia
              ut molestiae!</small
            >
          </hgroup>
        </label>
      </div>

      <div class="servicie grid">
        <div class="servicie-input">
          <input type="checkbox" id="titulo" name="titulo" />
        </div>
        <label for="titulo">
          <hgroup>
            <h5>Servicio de Revalidación de títulos</h5>
            <small
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur dolores suscipit voluptas vero, consequatur cum non
              eius officia ut molestiae!</small
            >
          </hgroup>
        </label>
      </div>
    </fieldset>

    <button
      id="saveInfoServicesBtn"
      class="outline"
      @click="guardarBasicInfo(e)"
    >
      GUARDAR
    </button>
  </article>
</template>

<script>
export default {
  methods: {
    guardarBasicInfo() {
      let saveInfoServicesBtn = document.getElementById("saveInfoServicesBtn");
      saveInfoServicesBtn.innerHTML = "GUARDANDO...";
      saveInfoServicesBtn.setAttribute("aria-busy", "true");
      setTimeout(() => {
        saveInfoServicesBtn.innerHTML = "GUARDAR";
        saveInfoServicesBtn.setAttribute("aria-busy", "false");
        console.log("guardarBasicInfo");
        console.log;
      }, 1000);
    },
  },
};
</script>





<style scoped lang="scss">
article {
  padding: 1.25rem;
  /* overflow: hidden; */
}

.servicie {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-flow: nowrap;
  &-input {
    width: 20%;
    margin-right: 20px;
    text-align: center;
  }
  label {
    width: 80%;
  }
  input {
    width: 50px;
    height: 40px;
    border-radius: 15px;
    margin-right: 20px;
  }
}
</style>