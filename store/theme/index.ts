import { defineStore } from "pinia";

type ThemeType = "dark" | "light";

export const useThemeStore = defineStore("theme", {
  //
  state: () => ({
    theme: "dark",
  }),

  // Getters
  getters: {
    currentTheme: (state) => state.theme,
  },

  // Actions
  actions: {
    setTheme(newTheme: ThemeType) {
      this.theme = newTheme;
    },
  },
});
