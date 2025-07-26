<script setup lang="ts">
import Introduction from "../components/home/Introduction.vue";
import About from "../components/home/About.vue";
import Blog from "../components/blog/DevToBlogIntegration.vue";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Noruwa Obaseki",
  titleTemplate: "%s, Software Developer",
});
</script>

<template>
  <div>
    <Introduction />
    <About />
    <Blog />
  </div>
</template>
