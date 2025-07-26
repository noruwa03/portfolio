<script setup lang="ts">
import ThemeSwitcher from "../theme/ThemeSwitcher.vue";
import Handshake from "../assets/icons/handshake.svg";

const resumeLink =
  "https://drive.google.com/file/d/1XQ-pAlScs2VY-g2mgH7eaQei4TXdcwRy/view?usp=sharing";
</script>

<template>
  <footer class="lg:px-16 sm:px-8 px-4 lg:pt-20 pt-16 lg:pb-16 pb-8">
    <h2
      class="sm:text-5xl text-4xl text-[#0591FF] font-semibold text-center mb-5"
    >
      Resumé
    </h2>
    <p class="text-lg text-center dark:text-[#FAFAFA] mb-8">
      Reach out to me by scheduling a meeting through the “Connect with me” button.
      <a
        :href="resumeLink"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[#0591FF]"
        >View resume
      </a>
    </p>
    <div class="flex flex-row items-center justify-center">
      <div
        class="size-26 bg-[#F8F8F9] dark:bg-[#d1d7e0] rounded-full grid place-content-center"
      >
        <NuxtImg :src="Handshake" alt="Handshake" class="w-16 h-16" />
      </div>
    </div>
    <h3 class="text-center text-3xl font-normal mt-8 mb-8 dark:text-[#FAFAFA]">
      Tell me about your project
    </h3>

    <div class="text-center mt-12 mb-26">
      <a
        href="https://cal.com/noruwa"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-9 py-4 bg-[#FFDE6A] text-black font-medium rounded-full transition-all duration-300 hover:bg-green-500/90 text-lg"
      >
        Connect with me
      </a>
    </div>
    <div class="w-full h-[2px] bg-gray-200 my-6"></div>
    <div
      class="flex sm:flex-row flex-col-reverse items-center justify-between gap-6"
    >
      <div class="flex flex-col gap-4 sm:items-start items-center">
        <p class="sm:text-base text-lg sm:mb-0 mb-3">
          © {{ new Date().getFullYear() }} Noruwa. All rights reserved.
        </p>
        <ThemeSwitcher />
      </div>
      <div
        class="flex flex-row items-center justify-between gap-4 sm:text-base text-lg"
      >
        <a
          href="https://github.com/noruwa03"
          target="_blank"
          rel="noopener noreferrer"
          >Github</a
        >
        /
        <a
          href="https://www.linkedin.com/in/obaseki-noruwa-184a4020b"
          target="_blank"
          rel="noopener noreferrer"
          >LinkedIn</a
        >
        /
        <a
          href="http://x.com/obasekinoruwa"
          target="_blank"
          rel="noopener noreferrer"
          >Twitter</a
        >
      </div>
    </div>
  </footer>
</template>
