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
          name="phoneMain"
          placeholder="Teléfono Principal"
          aria-label="Teléfono"
          required
          v-model="phoneMain"
        />
        <small>
          <label for="phoneMainWsp">
            <input
              type="checkbox"
              id="phoneMainWsp"
              name="phoneMainWsp"
              role="switch"
              v-model="phoneMainWsp"
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
          <label for="phoneAdicionalWsp">
            <input
              type="checkbox"
              id="phoneAdicionalWsp"
              name="phoneAdicionalWsp"
              role="switch"
              v-model="phoneAdicionalWsp"
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
          name="email1"
          placeholder="Correo electrónico"
          aria-label="Correo"
          required
          v-model="email"
          id="email"
        />
        <small>
          Este correo usarás para iniciar sesión y para recibir notificaciones.
        </small>
      </div>
      <div>
        <input
          type="text"
          name="email2"
          placeholder="Confirmar correo"
          aria-label="Correo"
          v-model="email2"
          required
          id="email2"
        />
        <small id="validateEmail2">Los correos no coinciden.</small>
      </div>
    </div>
    <button id="saveInfoContactBtn" class="outline" @click="guardarData()">
      GUARDAR
    </button>
  </article>
</template>


<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      phoneMain: "",
      phoneAdicional: "",
      phoneMainWsp: false,
      phoneAdicionalWsp: false,
      email: "",
      email2: "",
    };
  },
  watch: {
    email(val) {
      let $email = document.getElementById("email");
      $email.removeAttribute("aria-invalid");
      function validateEmail(param) {
        let re = /\S+@\S+\.\S+/;
        let isValid = re.test(param);
        return isValid;
      }
      validateEmail(val);
      if (validateEmail(val)) {
        $email.setAttribute("aria-invalid", "");
      } else {
        $email.setAttribute("aria-invalid", "true");
      }
    },
    email2(val) {
      let $email2 = document.getElementById("email2");
      $email2.removeAttribute("aria-invalid");
      let $validateEmail2 = document.getElementById("validateEmail2");
      if (val !== this.email) {
        $email2.setAttribute("aria-invalid", "true");
        $validateEmail2.style.display = "block";
      } else {
        $validateEmail2.style.display = "none";
        $email2.setAttribute("aria-invalid", "false");
      }
    },
  },
  methods: {
    ...mapActions({
      setContactInfoStore: "registerStore/setContactInfo",
      setViewsStore: "registerStore/setViews",
    }),
    validateEmail() {
      let re = /\S+@\S+\.\S+/;
      console.log(re.test(this.email));
    },
    guardarData() {
      let $email = document.getElementById("email");
      let $email2 = document.getElementById("email2");
      // TODO Hacer que se valide que no envíen datos vacios.
      
      if (
        $email.getAttribute("aria-invalid") === "true" ||
        $email2.getAttribute("aria-invalid") === "true"
      ) {
        console.log("Por favor, revisa los datos ingresados.");
        return;
      } else {
        let $saveInfoContactBtn = document.getElementById("saveInfoContactBtn");
        $saveInfoContactBtn.innerHTML = "GUARDANDO...";
        $saveInfoContactBtn.setAttribute("aria-busy", "true");
        this.setContactInfoStore({
          phoneMain: this.phoneMain,
          phoneAdicional: this.phoneAdicional,
          phoneMainWsp: this.phoneMainWsp,
          phoneAdicionalWsp: this.phoneAdicionalWsp,
          email: this.email,
        });

        setTimeout(() => {
            $saveInfoContactBtn.innerHTML = "GUARDAR";
            $saveInfoContactBtn.setAttribute("aria-busy", "false");
            this.setViewsStore('servicesRequired');
        }, 700);
      }
    },
  },
};
</script>


// <style scoped lang="scss">
article {
  padding: 1.25rem;
  #validateEmail2 {
    display: none;
    color: #c62828;
  }
}
</style>