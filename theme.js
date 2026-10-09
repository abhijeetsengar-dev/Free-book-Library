/* Runs before the page paints, so the saved theme shows without a flash */
try {
    document.documentElement.dataset.theme = localStorage.getItem("fbl-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
} catch (e) {}