<script setup lang="ts">
import Navbar from "../components/layouts/Navbar.vue";
import Footer from "../components/layouts/Footer.vue";
</script>

<template>
  <div class="font-proximasoft container mx-auto">
    <Navbar />
    <slot />
    <Footer/>
  </div>
</template>
