<script setup lang="ts">
import { jobExp } from "../../data/jobExp";
</script>

<template>
  <section class="lg:py-10 py-20 px-4 md:px-16 lg:px-24 relative">
    <h2 class="sm:text-6xl text-4xl font-medium sm:mb-16 mb-8 text-center">
      Work Experience
    </h2>
    <ul class="space-y-10">
      <li v-for="(company, index) in jobExp" :key="index" class="relative">
        <!-- Company icon and name -->
        <div class="flex items-center space-x-2 mb-2">
          <div
            class="w-6 h-6 rounded-full flex items-center justify-center text-white"
            :class="company.color"
          ></div>
          <span class="sm:text-3xl text-2xl font-medium dark:text-white">{{
            company.name
          }}</span>
        </div>

        <!-- Job list -->
        <ul class="ml-4 border-l-2 border-gray-300 pl-4 space-y-6 relative">
          <li
            v-for="(job, jIndex) in company.roles"
            :key="jIndex"
            class="relative"
          >
            <!-- Connector Dot -->
            <div
              class="absolute -left-[22px] top-2 w-3 h-3 bg-white border-2 rounded-full"
              :class="job.statusColor"
            ></div>

            <!-- Role & Details -->
            <div class="font-medium sm:text-3xl text-xl">{{ job.title }}</div>
            <div class="text-base">
              {{ job.start }} - {{ job.end }} ({{ job.duration }})
            </div>
            <div class="text-base">{{ job.location }} • {{ job.type }}</div>
            <p class="my-4">
              {{ job.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tech, techIndex) in job.technologies"
                :key="techIndex"
                class="px-3 py-1 bg-black/5 dark:bg-white/5 text-sm rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
