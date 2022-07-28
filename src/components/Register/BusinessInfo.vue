<template>
  <article class="container">
    <hgroup>
      <h3>Información Básica Del Negocio</h3>
      <small>Esta información nos ayuda a conocerte mejor.</small>
    </hgroup>

    <div class="ideaOrBusiness grid">
      <div class="ideaOrBusiness-option" id="idea">
        <i class="fa-regular fa-lightbulb"></i>
        <hgroup>
          <h3>Idea de negocio</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            fuga sunt molestias. Cupiditate harum quidem, eligendi ratione
            magnam iure tempore.
          </p>
        </hgroup>
        <button id="btnIdea" @click="statusBusiness" class="secondary">
          TENGO UNA IDEA DE NEGOCIO
        </button>
      </div>

      <div class="ideaOrBusiness-option" id="business">
        <i class="fa-solid fa-fire"></i>
        <hgroup>
          <h3>Negocio en Marcha</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            fuga sunt molestias. Cupiditate harum quidem, eligendi ratione
            magnam iure tempore.
          </p>
        </hgroup>
        <button class="secondary" id="btnBusiness" @click="statusBusiness">
          YA TENGO UN NEGOCIO
        </button>
      </div>
    </div>
    <div id="businessForm" v-if="business">
      <div class="grid">
        <input
          type="text"
          name="nameBusiness"
          id="nameBusiness"
          v-model="nameBusiness"
          placeholder="Nombre del Negocio"
        />
        <input
          type="text"
          name="descriptionBusiness"
          id="descriptionBusiness"
          v-model="descriptionBusiness"
          placeholder="Describe tu Negocio"
        />
      </div>
      <div class="grid">
        <input
          type="text"
          name="adressBusiness"
          id="adressBusiness"
          v-model="adressBusiness"
          placeholder="Dirección del Negocio"
        />
        <div>
          <input
            type="text"
            name="phoneBusiness"
            id="phoneBusiness"
            v-model="phoneBusiness"
            placeholder="Teléfono tu Negocio"
          />
          <small>
            <label for="switchWspBusiness">
              <input
                type="checkbox"
                id="switchWspBusiness"
                name="switchWspBusiness"
                role="switch"
                placeholder="SI"
              />¿Este número tiene Whatsapp
              <i class="fa-brands fa-whatsapp"></i>?</label
            >
          </small>
        </div>
      </div>
    </div>
    <div id="ideaForm" v-if="idea">
      <div class="grid">
        <input
          type="text"
          name="nameIdea"
          id="nameIdea"
          v-model="nameIdea"
          placeholder="Nombre de la Idea"
        />
        <input
          type="text"
          name="descriptionIdea"
          id="descriptionIdea"
          v-model="descriptionIdea"
          placeholder="Describe tu Idea"
        />
      </div>
      <div class="grid">
        <input
          type="text"
          name="adressIdea"
          id="adressIdea"
          v-model="adressIdea"
          placeholder="Dirección de la Idea"
        />
        <div>
          <input
            type="text"
            name="phoneIdea"
            id="phoneIdea"
            v-model="phoneIdea"
            placeholder="Teléfono de la Idea"
          />
          <small>
            <label for="switchWspIdea">
              <input
                type="checkbox"
                id="switchWspIdea"
                name="switchWspIdea"
                role="switch"
                placeholder="SI"
              />¿Este número tiene Whatsapp
              <i class="fa-brands fa-whatsapp"></i>?</label
            >
          </small>
        </div>
      </div>
    </div>
    <button v-if="idea || business" class="outline">GUARDAR</button>
  </article>
</template>

<script>
export default {
  data() {
    return {
      idea: false,
      business: false,
    };
  },
  methods: {
    /**
     * @description: Función que se ejecuta cuando se selecciona la opción de idea o negocio.
     * @param {type} e  Capturando el target del botón.
     */
    statusBusiness(event) {
      let $divIdea = document.getElementById("idea");
      let $divBusiness = document.getElementById("business");
      if (event.target.id == "btnIdea") {
        $divBusiness.classList.remove("ideaOrBusiness-option-active-business");
        $divIdea.classList.add("ideaOrBusiness-option-active-idea");
        this.idea = true;
        this.business = false;
      } else {
        $divBusiness.classList.add("ideaOrBusiness-option-active-business");
        $divIdea.classList.remove("ideaOrBusiness-option-active-idea");
        this.idea = false;
        this.business = true;
      }
    },
    goStatusForm() {
      if (this.idea) {
        console.log("idea");
      } else if (this.business) {
        console.log("business");
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

.ideaOrBusiness {
  margin-bottom: 25px;
  &-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.25rem;
    margin: 0.5rem;
    transition: all 0.1s ease-in-out;
    i {
      font-size: 2rem;
    }
    hgroup {
      margin-top: 1rem;
      padding: 0;
      h3 {
        text-align: center;
      }
      p {
        margin-top: 15px;
        text-align: justify !important;
      }
    }
  }
  &-option-active-idea {
    border: 3px solid #ffd54f;
    i {
      color: #ffd54f;
    }
    h3 {
      color: #ffd54f;
    }
    button {
      background-color: #ffd54f;
      color: #000;
    }
  }
  &-option-active-business {
    border: 3px solid #f44336;
    i {
      color: #f44336;
    }
    h3 {
      color: #f44336;
    }
    button {
      background-color: #f44336;
      color: #fff;
    }
  }
}
</style>