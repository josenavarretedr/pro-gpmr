<template>
  
    <article class="grid">
      <div>
        <hgroup>
          <h1>Inicia Sesión</h1>
          <h2>Seguimos juntos.</h2>
        </hgroup>
        <form>
          <input
            type="text"
            name="login"
            placeholder="Inicio de sesion"
            aria-label="Inicio"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            aria-label="Contraseña"
            required
          />
          <small>¿Aún no te has registrado?<router-link to='/register'>Registrate aquí</router-link> </small>
          <button
            type="submit"
            class="contrast"
            onclick="event.preventDefault()"
          >
            Login
          </button>
        </form>
      </div>
      <div></div>
    </article>
</template>


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
