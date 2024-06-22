import { writable } from "svelte/store";

export let isDarkMode = writable(false);

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const handleChange = (event) => {
  isDarkMode.update(() => event.matches);
};

mediaQuery.addEventListener("change", handleChange);

handleChange(mediaQuery);
