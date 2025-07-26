<script setup lang="ts">
import Avatar from "../../assets/images/noruwa-avatar.jpg";
import { certs } from "../../data/certifications";
</script>

<template>
  <section class="lg:py-10 py-20 px-4 md:px-16 lg:px-24 relative">
    <div
      class="flex sm:flex-row flex-col-reverse items-start justify-between lg:gap-10 gap-6"
    >
      <div class="w-full">
        <h2 class="sm:text-6xl text-4xl font-medium mb-5 text-[#0591FF]">
          Hi 👋🏾, I'm Noruwa
        </h2>
        <p class="sm:text-base">
          a software developer with a focus on building scalable, intuitive, and
          maintainable web applications. Since beginning my development journey
          in 2020, I've contributed to a range of projects across frontend,
          full-stack, and infrastructure focused roles — from creating user
          interfaces and custom components to improving build pipelines and
          development workflows.
        </p>
        <p class="sm:base my-5">
          I've collaborated with remote teams at Rendex, and Ecolabz, delivering
          features that align with user needs and business goals. My core skills
          include JavaScript, React.js, Vue.js, TailwindCSS, FastAPI, and tools
          like Docker, GitHub Actions, Kubernetes, AWS, and Azure. I'm also
          actively expanding my knowledge of cloud-native technologies to
          support modern, scalable application development.
        </p>
        <p class="sm:text-base">
          I enjoy solving real-world problems by building clean and efficient
          systems, whether on the frontend or within infrastructure. I thrive in
          agile, collaborative environments where code quality, usability, and
          reliability are top priorities.
        </p>
      </div>
      <div class="w-full lg:aspect-[3/2.5] aspect-[3/3]">
        <img
          :src="Avatar"
          alt="Avatar"
          height="600"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="mt-24">
      <h2 class="sm:text-5xl text-4xl font-medium text-center mb-5">
        Professional <span class="text-[#0591FF]">Certifications</span>
      </h2>
      <p class="sm:text-base text-center">
        Accredited certifications demonstrating my proficiency in various technical areas and industry-relevant domains.
      </p>
      <div
        class="flex lg:flex-row flex-col flew-wrap items-center justify-start mt-6 gap-6"
      >
        <div
          v-for="cert in certs"
          :key="`first-${cert.id}`"
          class="sm:w-2/3 w-full bg-white dark:bg-white/3 rounded-xl border-[1px] border-gray-100 dark:border-gray-700 shadow-md dark:shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] p-6"
        >
          <a
            :href="cert.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-row flex-wrap items-center lg:justify-start justify-center gap-6 hover:[&>div>h3]:text-green-500 hover:[&>div>span]:block"
          >
            <div class="w-27 h-25 relative">
              <img :src="cert.image" :alt="cert.title" class="w-full h-full" />
              <span
                class="hidden absolute top-1/2 left-1/2 -translate-1/2 text-white bg-green-500 rounded-full text-sm py-1 px-2"
                >View</span
              >
            </div>
            <div class="text-base">
              <h3 class="text-lg lg:text-start text-center font-normal text-[#0591FF] dark:text-white">
                {{ cert.title }}
              </h3>
              <p class="lg:text-start text-center font-normal">{{ cert.provider }}</p>
            </div>
          </a>
          <div class="w-full h-[1px] dark:bg-gray-700 my-4"></div>
          <div class="flex flex-row flex-wrap items-center justify-between gap-2">
            <div
              class="rounded-full text-sm py-1 px-2 border-[1px] border-green-300 dark:border-green-200 text-green-500 dark:text-green-300"
            >
              {{ cert.year }}
            </div>
            <div
              class="rounded-full text-sm py-1 px-2 border-[1px] border-gray-400 text-gray-600 dark:border-gray-200 dark:text-gray-200"
            >
              {{ cert.domain }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
