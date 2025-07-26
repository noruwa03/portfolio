<script setup lang="ts">
import Projects from "../components/pages/Projects.vue";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Noruwa Obaseki",
  titleTemplate: "%s, Software Developer",
});
</script>
<template>
  <Projects />
</template>
