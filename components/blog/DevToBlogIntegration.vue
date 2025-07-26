<script setup lang="ts">
import { ref, onMounted } from "vue";

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  tag_list: string[];
  cover_image: string;
  url: string;
  canonical_url: string;
  reading_time_minutes: number;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
}

const username = "noruwa";
const articles = ref<DevToArticle[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const isPaused = ref(false);

const fetchArticles = async () => {
  try {
    loading.value = true;
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    articles.value = await response.json();
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Unknown error occurred";
    console.error("Error fetching Dev.to articles:", err);
  } finally {
    loading.value = false;
  }
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

onMounted(() => {
  fetchArticles();
});
</script>

<template>
  <section
    class="sm:py-20 py-15 px-4 md:px-16 lg:px-24 relative overflow-hidden"
  >
    <h2
      class="text-center text-4xl font-semibold mt-8 mb-6 dark:text-[#FAFAFA]"
    >
      My Articles
    </h2>

    <p class="lg:w-[70%] w-full mb-10 text-lg mx-auto text-center">
      Sharing my understanding of software development through articles 🚀
    </p>

    <div v-if="loading" class="text-center text-lg py-8">
      <p>Loading blog posts...</p>
    </div>

    <div v-else-if="error" class="text-center p-4 text-red-400 text-lg">
      <p>{{ error }}</p>
    </div>

    <div v-else-if="articles.length === 0" class="text-center text-lg py-8">
      <p>No blog posts found.</p>
    </div>

    <div
      v-else
      class="marquee-outer-container"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <div
        class="marquee-inner-container gap-8 mr-[32px]"
        :class="{ paused: isPaused }"
      >
        <!-- First set of articles -->
        <div class="flex gap-8">
          <div
            v-for="article in articles"
            :key="`first-${article.id}`"
            class="min-w-[300px] w-[300px] flex-shrink-0 bg-white dark:bg-white/3 rounded-xl shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <a :href="article.url" target="_blank" rel="noopener noreferrer">
              <div class="h-48 dark:bg-gray-50 relative overflow-hidden">
                <NuxtImg
                  v-if="article.cover_image"
                  :src="article.cover_image"
                  :alt="article.title"
                  class="h-full w-full object-cover"
                />
                <div
                  v-else
                  class="h-48 bg-gray-200 flex items-center justify-center"
                >
                  <span class="text-gray-400 text-lg">No cover image</span>
                </div>
              </div>

              <div class="sm:p-6 p-3">
                <div class="flex justify-between items-center text-sm mb-2">
                  <span>{{ formatDate(article.published_at) }}</span>
                  <span>{{ article.reading_time_minutes }} min read</span>
                </div>
                <h3 class="text-xl font-bold mb-3 dark:text-[#FAFAFA]">
                  {{ article.title }}
                </h3>

                <p>{{ article.description }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Duplicate set for continuous scrolling -->
        <div class="flex gap-8">
          <div
            v-for="article in articles"
            :key="`second-${article.id}`"
            class="min-w-[300px] w-[300px] flex-shrink-0 bg-white dark:bg-white/3 rounded-xl shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <a :href="article.url" target="_blank" rel="noopener noreferrer">
              <div class="h-48 dark:bg-gray-50 relative overflow-hidden">
                <NuxtImg
                  v-if="article.cover_image"
                  :src="article.cover_image"
                  :alt="article.title"
                  class="h-full w-full object-cover"
                />
                <div
                  v-else
                  class="h-48 bg-gray-200 flex items-center justify-center"
                >
                  <span class="text-gray-400 text-lg">No cover image</span>
                </div>
              </div>

              <div class="sm:p-6 p-3">
                <div class="flex justify-between items-center text-sm mb-2">
                  <span>{{ formatDate(article.published_at) }}</span>
                  <span>{{ article.reading_time_minutes }} min read</span>
                </div>
                <h3 class="text-xl font-bold mb-3 dark:text-[#FAFAFA]">
                  {{ article.title }}
                </h3>

                <p>{{ article.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!error" class="text-center mt-12">
      <a
        href="https://dev.to/noruwa"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-9 py-4 bg-[#0591FF] text-white font-medium rounded-full transition-all duration-300 hover:bg-green-500/90 text-lg"
      >
        View all posts
      </a>
    </div>
  </section>
</template>

<style scoped>
.marquee-outer-container {
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
}

.marquee-inner-container {
  display: flex;
  animation: marquee 60s linear infinite;
  width: fit-content;
}

.paused {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
