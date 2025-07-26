<script setup lang="ts">
const projects = [
  {
    title: "norw",
    description:
      "norw is an analytic tool for data analysis that makes it easy to ask questions to your data in natural language. It is an approach to data insights for local businesses, extracting meaningful insights from a vast array of data sources such as Excel spreadsheets, CSV files, JSON files.",
    videoUrl: "/project-demo/norw-insight.mp4",
    demoUrl: "https://norw-insight.vercel.app/",
    githubUrl: "",
  },
  {
    title: "Survey Form",
    description:
      "Created a responsive survey form application with React.js and PostgreSQL for data storage, emphasizing a seamless user experience.",
    videoUrl: "/project-demo/survey-form.mp4",
    demoUrl: "https://survey-e87h.onrender.com",
    githubUrl: "https://github.com/noruwa03/survey-form",
  },
  {
    title: "Movie Web App",
    description:
      "Developed a feature-rich movie and TV show streaming application designed to enhance user entertainment experiences. The application allows users to browse, search, and watch movies or TV shows seamlessly. Built with Vue.js for an interactive frontend, TailwindCSS for modern and responsive styling and Pinia for efficient state management. The app integrates with the TMDB API using Axios for real-time content updates.",
    videoUrl: "/project-demo/movie-app.mp4",
    demoUrl: "https://norw.netlify.app/",
    githubUrl: "https://github.com/noruwa03/movie-app",
  },
  {
    title: "Shopper Cart",
    description:
      "Ecommerce web app created with tailwindcss and firebase. Demo Account Admin - admin.shoppercart@demo.com, test12345 Demo Account Customer - customer.shoppercart@demo.com, test12345",
    videoUrl: "/project-demo/shopper-cart.mp4",
    demoUrl: "https://ecommerce-firebase-sigma.vercel.app/",
    githubUrl: "https://github.com/noruwa03/Ecommerce-Firebase",
  },
  {
    title: "Dictionary App",
    description:
      "Implemented an interactive and lightweight dictionary application for looking up word definitions and meanings. Built with HTML, CSS, and JavaScript, the app fetches real-time data from external APIs using JavaScript's native fetch method. The minimalist design ensures ease of use while delivering quick and accurate search results.",
    videoUrl: "/project-demo/dictionary-app.mp4",
    demoUrl: "https://dictionary-app-vert.vercel.app/",
    githubUrl: "https://github.com/noruwa03/DictionaryApp",
  },
];
</script>

<template>
  <section class="lg:py-10 py-20 px-4 md:px-16 lg:px-24 relative">
    <h2 class="sm:text-6xl text-4xl font-medium mb-10 text-[#0591FF]">
      Projects I've Built<span>.</span>
    </h2>

    <div class="lg:space-y-24 space-y-20">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex lg:flex-row flex-col items-center justify-between gap-6"
      >
        <div class="lg:w-3/5 sm:w-5/5 w-5/5 aspect-[3/1.5]">
          <video
            :src="project.videoUrl"
            class="w-full h-full cursor-pointer object-cover"
            controls
            preload="metadata"
          >Your browser does not support the video tag</video>
        </div>
        <div class="lg:w-2/5 sm:w-5/5 w-5/5">
          <h3 class="sm:text-4xl text-3xl font-medium mb-2 dark:text-white">
            {{ project.title }}
          </h3>
          <p>
            {{ project.description }}
          </p>
          <div class="mt-4 flex flex-row space-x-6">
            <a
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                view-box="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link stroke-gray-600 dark:stroke-white"
              >
                <title>External Link</title>
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                view-box="0 0 24 24"
                height="24"
                width="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github stroke-gray-700 dark:stroke-white"
              >
                <title>GitHub</title>
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
