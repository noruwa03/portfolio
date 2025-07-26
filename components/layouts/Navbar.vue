<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const currentRoute = useRoute();
const router = useRouter();

const toggleMenu = ref<HTMLDivElement>();
const nav = ref<HTMLDivElement>();

const menuHandler = () => {
  toggleMenu.value?.classList.toggle("hamburger-toggle");
  nav.value?.classList.toggle("-left-[100%]");
};

const goToHome = () => {
  router.push("/");
};

const routes = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "experience", href: "/experience" },
  { name: "blog", href: "https://dev.to/noruwa" },
];
</script>

<template>
  <nav
    ref="nav"
    :class="[
      currentRoute.path === `/`
        ? 'lg:bg-transparent lg:bg-gradient-to-r lg:from-[#FFFBED] lg:to-[#FFFBEE]'
        : '',
    ]"
    class="px-0 md:px-16 lg:px-24 w-screen fixed lg:sticky top-0 lg:left-0 -left-[100%] z-[1] flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between lg:gap-0 gap-6 h-screen lg:h-16 overflow-y-auto lg:overflow-visible backdrop-blur-md lg:container lg:mx-auto dark:from-[#212830] dark:to-[#212830] text-black"
  >
    <div
      class="lg:w-1/5 w-5/5 lg:flex hidden items-center justify-start text-4xl text-black dark:text-white font-normal font-zeyada mt-3 cursor-pointer"
      @click="goToHome"
    >
      Noruwa Obaseki
    </div>
    <ul
      class="flex lg:flex-row flex-col items-center lg:items-center lg:justify-center gap-6 lg:w-3/5 w-5/5 lg:text-base text-3xl"
    >
      <li
        v-for="route in routes"
        :key="route.name"
        class="px-5 py-1 cursor-pointer dark:text-white"
        @click="menuHandler"
      >
        <NuxtLink :to="route.href" v-if="route.name !== 'blog'">{{
          route.name.charAt(0).toUpperCase() + route.name.slice(1)
        }}</NuxtLink>
        <a
          :href="route.href"
          target="_blank"
          rel="noopener noreferrer"
          v-if="route.name == 'blog'"
          >{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</a
        >
      </li>
    </ul>
    <div
      class="lg:w-1/5 w-5/5 flex items-center lg:justify-end justify-center"
      @click="menuHandler"
    >
      <NuxtLink
        to="/projects"
        :class="[
          currentRoute.path === `/projects`
            ? 'underline underline-offset-6 decoration-2 decoration-blue-400 lg:text-base text-3xl'
            : 'underline underline-offset-6 decoration-2 decoration-gray-900 dark:decoration-white cursor-pointer lg:py-0 py-1 lg:text-base text-3xl dark:text-white',
        ]"
      >
        Check out my projects
      </NuxtLink>
    </div>
  </nav>
  <div
    class="lg:hidden flex flex-row items-center justify-between backdrop-blur-md w-full h-16 fixed top-0 z-[3] px-6"
  >
    <div
      class="font-zeyada text-3xl font-normal text-black dark:text-white mt-2 cursor-pointer"
      @click="goToHome"
    >
      Noruwa Obaseki
    </div>
    <div class="" ref="toggleMenu">
      <div
        class="w-8 h-[2px] bg-black dark:bg-white rounded-full before:w-8 before:h-[2px] before:bg-black dark:before:bg-white before:rounded-full before:content-[''] before:absolute before:-translate-y-2 before:transition-all before:duration-150 after:w-8 after:h-[2px] after:bg-black dark:after:bg-white after:rounded-full after:content-[''] after:absolute after:translate-y-2 after:transition-all after:duration-150"
        @click="menuHandler"
      ></div>
    </div>
  </div>
</template>
