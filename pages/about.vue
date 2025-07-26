<script setup lang="ts">
import About from "../components/pages/About.vue";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Noruwa Obaseki",
  titleTemplate: "%s, Software Developer",
});
</script>
<template>
  <About />
</template>
