<template>
  <nav>
    <router-link to="/">Proyecto ABC</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">

nav {
  padding: 30px;
  text-align: center;
  display: flex;
  justify-content: center !important;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
