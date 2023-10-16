<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderPage from "./components/pages/header.vue";
import Cards from "./components/pages/cards.vue";
import Loyauot from "./components/pages/layout.vue";
</script>

<template>
  <div class="app">
    <Loyauot />
    <!-- <HeaderPage />

    <Cards /> -->
  </div>
</template>

<style scoped>
.app {
  /* width: 500px; */
  margin: 0 auto;
}
</style>
