<script setup lang="ts">
import AWS from "../../assets/icons/aws.svg";
import Docker from "../../assets/icons/docker.svg";
import GithubActions from "../../assets/icons/github_actions.svg";
import Linux from "../../assets/icons/linux.svg";
</script>

<template>
  <section
    class="relative sm:min-h-full min-h-full w-full inset-0 bg-gradient-to-r from-[#FFFBED] to-[#FFFBEE] lg:pt-0 pt-10 dark:from-[#212830] dark:to-[#212830]"
  >
    <div class="hero-bg h-full bg-no-repeat bg-cover bg-center">
      <div class="lg:w-3/5 w-[100%] px-8 mx-auto sm:pt-20 sm:pb-28 pt-14 pb-40">
        <div
          class="relative bg-[#E5FDF4] dark:bg-[#FFDE6A] sm:w-[243.85px] w-[92%] h-[38px] mx-auto mb-4 rounded-full p-1 flex flex-row items-center justify-between"
        >
          <div
            class="flex flex-row items-center overflow-hidden gap-[9px] pl-[0.25rem]"
          >
            <NuxtImg :src="AWS" alt="AWS" class="w-7 h-7" />
            <NuxtImg :src="Docker" alt="Docker" class="w-7 h-7" />
            <NuxtImg :src="GithubActions" alt="GithubActions" class="w-7 h-7" />
            <!-- Using img tag for the last icon to avoid NuxtImg issue of not loading -->
            <img :src="Linux" alt="Linux" class="w-7 h-7" />
          </div>
          <span
            class="absolute top-0 right-0 bg-[#DDE0FF] dark:bg-[#E5FDF4] text-xs h-[38px] w-[90px] grid place-content-center rounded-full dark:text-black"
          >
            Tools i use
          </span>
        </div>
        <h1
          class="lg:text-9xl text-6xl text-center font-black text-[#0591FF] sm:mt-0 mt-20"
        >
          Noruwa
          <span
            class="block lg:text-9xl text-6xl text-black dark:text-[#FAFAFA]"
            >- Obaseki -</span
          >
        </h1>
        <p class="lg:text-lg text-lg text-center lg:w-[70%] w-5/5 mx-auto my-5">
          Creative tech enthusiast. Building digital products, brands, and
          experience.
        </p>
        <div class="text-center sm:mt-9 mt-12">
          <a
            href="https://cal.com/noruwa"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-9 py-4 bg-[#FFDE6A] text-black font-medium rounded-full transition-all duration-300 hover:bg-green-500/90 text-lg"
          >
            Connect with me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
