<template>
  <article class="container">
    <hgroup>
      <h3>Información de contacto</h3>
      <small>Para poder contactarte más adelante.</small>
    </hgroup>
    <div class="grid">
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Teléfono Principal"
          aria-label="Teléfono"
          required
          v-model="phone"
        />
        <small>
          <label for="switchWsp1">
            <input
              type="checkbox"
              id="switchWsp1"
              name="switchWsp1"
              role="switch"
            />¿Este número tiene Whatsapp
            <i class="fa-brands fa-whatsapp"></i>?</label
          >
        </small>
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Teléfono adicional"
          aria-label="Teléfono"
          required
          v-model="phoneAdicional"
        />
        <small>
          <label for="switchWsp2">
            <input
              type="checkbox"
              id="switchWsp2"
              name="switchWsp2"
              role="switch"
              placeholder="SI"
            />¿Este número tiene Whatsapp
            <i class="fa-brands fa-whatsapp"></i>?</label
          >
        </small>
      </div>
    </div>
    <div class="grid">
      <div>
        <input
          type="text"
          name="email2"
          placeholder="Correo electrónico"
          aria-label="Correo"
          required
        />
        <small>
          Este correo usarás para iniciar sesión y para recibir notificaciones.
        </small>
      </div>
      <input
        type="text"
        name="email2"
        placeholder="Confirmar correo"
        aria-label="Correo"
        required
      />
    </div>
    <button
      id="saveInfoContactBtn"
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
      let saveInfoContactBtn = document.getElementById("saveInfoContactBtn");
      saveInfoContactBtn.innerHTML = "GUARDANDO...";
      saveInfoContactBtn.setAttribute("aria-busy", "true");
      setTimeout(() => {
        saveInfoContactBtn.innerHTML = "GUARDAR";
        saveInfoContactBtn.setAttribute("aria-busy", "false");
        console.log("guardarBasicInfo");
        console.log;
      }, 1000);
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