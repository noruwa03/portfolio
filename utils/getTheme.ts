export const getTheme = () => {
  const theme = window.localStorage.theme_n
    ? window.localStorage.theme_n
    : "light";
  return theme;
};

// Function to get theme based on localStorage
export const getThemeFromStorage = () => {
  const docRef: any = document.documentElement;
  const theme = getTheme();
  switch (theme) {
    case "dark":
      docRef.classList = "dark";
      window.localStorage.setItem("theme_n", "dark");
      break;
    case "light":
      docRef.classList = "light";
      window.localStorage.setItem("theme_n", "light");
      break;
    default:
      window.localStorage.removeItem("theme_n");
      break;
  }
  return;
};
