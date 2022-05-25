<script setup>
import NavBar from "./components/NavBar.vue";
import PrimeraSeccion from "./components/PrimeraSeccion.vue";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-light navegador">
    <NavBar />
  </nav>

  <!-- Primera seccion -->
  <div class="container-fluid seccion_1">
    <PrimeraSeccion />
  </div>

  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it bro!" />
    </div>
  </header> -->

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<style>
@import "./assets/base.css";
@import "./assets/mystyle.css";
</style>
