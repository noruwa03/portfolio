<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import AWS from "../assets/icons/aws.svg";
import Ansible from "../assets/icons/ansible.svg";
import Azure from "../assets/icons/azure.svg";
import Bash from "../assets/icons/bash.svg";
import Docker from "../assets/icons/docker.svg";
import GithubActions from "../assets/icons/github_actions.svg";
// import GitLab from "../assets/icons/gitlab.svg";
import Grafana from "../assets/icons/grafana.svg";
import Helm from "../assets/icons/helm.svg";
// import Jenkins from "../assets/icons/jenkins.svg";
import Kubernetes from "../assets/icons/kubernetes.svg";
import Linux from "../assets/icons/linux.svg";
import Prometheus from "../assets/icons/prometheus.svg";
import Python from "../assets/icons/python.svg";
import Terraform from "../assets/icons/terraform.svg";

const skills = [
  "AZURE",
  "AWS SPECIALIST",
  "KUBERNETES",
  "DOCKER VIRTUOSO",
  "TERRAFORM",
  "CI/CD PIPELINE BUILDER",
  "GITHUB ACTIONS",
  "ANSIBLE CONFIGURATOR",
  "BASH WIZARD",
  "LINUX ADMINISTRATOR",
  "MONITORING",
  "PROMETHEUS & GRAFANA",
  "DEVSECOPS PRACTITIONER",
  "MICROSERVICES ARCHITECT",
  "CLOUD COST OPTIMIZER",
  "INFRASTRUCTURE AUTOMATOR",
];

const marqueeText: any | null = ref(null);

onMounted(() => {
  // Clone the marquee content to ensure smooth looping
  const originalWidth = marqueeText.value.offsetWidth;
  const clone = marqueeText.value.cloneNode(true);
  marqueeText.value.parentNode.appendChild(clone);

  // Create the animation
  gsap.to(".marquee-item", {
    x: -originalWidth,
    repeat: -1,
    duration: 205,
    ease: "linear",
  });
});

// Define the skills and their corresponding tools
const skillsAndTools = [
  {
    skill: "Ansible",
    icon: Ansible,
    color: "#00000",
  },
  {
    skill: "AWS",
    icon: AWS,
    color: "#FF9900",
  },
  {
    skill: "Azure",
    icon: Azure,
    color: "#007FFF",
  },
  {
    skill: "Bash",
    icon: Bash,
    color: "#0D0D0D",
  },
  {
    skill: "Docker",
    icon: Docker,
    color: "#0078D4",
  },
  {
    skill: "Github Actions",
    icon: GithubActions,
    color: "#0078D4",
  },
  // {
  //   skill: "Gitlab",
  //   icon: GitLab,
  //   color: "#FC6D26",
  // },
  {
    skill: "Grafana",
    icon: Grafana,
    color: "#FC6D26",
  },
  {
    skill: "Helm",
    icon: Helm,
    color: "#301934",
  },
  // {
  //   skill: "Jenkins",
  //   icon: Jenkins,
  //   color: "#D33834",
  // },
  {
    skill: "Kubernetes",
    icon: Kubernetes,
    color: "#326CE5",
  },
  {
    skill: "Linux",
    icon: Linux,
    color: "#FF9900",
  },
  {
    skill: "Prometheus",
    icon: Prometheus,
    color: "#ff4646",
  },
  {
    skill: "Python",
    icon: Python,
    color: "#326CE5",
  },
  {
    skill: "Terraform",
    icon: Terraform,
    color: "#946CED",
  },
];

// State management using Vue's ref
const activeIndex = ref(0);
const containerRef = ref<HTMLElement | null>(null);

// Animation cycle
let interval: number | null = null;

onMounted(() => {
  interval = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % skillsAndTools.length;
  }, 3000);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <section class="lg:py-20 py-31 px-4 md:px-0 relative">
    <h2 class="text-center text-4xl font-semibold mb-8 dark:text-[#FAFAFA]">
      Skills Transform Into Tools<span class="">.</span>
    </h2>
    <!-- Horizontal scrolling text container -->
    <div class="w-full overflow-hidden sm:mt-0 mt-12 mb-8">
      <div class="inline-flex whitespace-nowrap">
        <div
          ref="marqueeText"
          class="marquee-item sm:text-9xl text-4xl font-bold text-[#0591FF] dark:text-[#d1d7e0]"
        >
          <template v-for="(skill, index) in skills" :key="index">
            {{ skill }} <span class="mx-2">·</span>
          </template>
        </div>
      </div>
    </div>

    <div class="w-full h-full flex flex-col items-center justify-center">
      <div
        class="relative w-full max-w-lg h-64 flex items-center justify-center"
        ref="containerRef"
      >
        <div
          v-for="(item, index) in skillsAndTools"
          :key="item.skill"
          class="absolute transition-all duration-1000 transform flex flex-col items-center"
          :class="[
            index === activeIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-75',
          ]"
        >
          <!-- Skill Text -->
          <div
            class="text-3xl font-medium mb-8 transition-all duration-1000"
            :class="[
              index === activeIndex ? 'transform-none' : 'translate-y-8',
            ]"
          >
            {{ item.skill }}
          </div>

          <!-- Icon Container -->
          <div class="relative w-28 h-28 flex items-center justify-center">
            <!-- Animated Ring -->
            <div
              class="absolute inset-0 rounded-full border-4 transition-all duration-1500"
              :class="[
                index === activeIndex
                  ? 'border-opacity-100 rotate-180 scale-110'
                  : 'border-opacity-0 rotate-0 scale-0',
              ]"
              :style="{ borderColor: item.color }"
            ></div>

            <!-- Tool Icon -->
            <img
              :src="item.icon"
              :alt="item.skill"
              class="w-20 h-20"
              :class="[
                index === activeIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0',
                index === 1 || index === 3 ? 'dark:invert' : '',
              ]"
            />
          </div>
        </div>
      </div>

      <!-- Progress Indicators -->
      <div
        class="flex space-x-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <div
          v-for="(_, index) in skillsAndTools"
          :key="index"
          class="rounded-full transition-all duration-300"
          :class="[
            index === activeIndex ? 'bg-black w-6 h-2' : 'bg-gray-500 w-2 h-2',
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
