// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  // Disable Nuxt telemetry
  // See https://github.com/nuxt/telemetry
  telemetry: false,
  /*
   ** Define root directory and override default
   ** See https://nuxtjs.org/api/configuration-rootdir
   */
  rootDir: ".",
  /*
   ** Define source directory and override default
   ** See https://nuxtjs.org/api/configuration-srcdir
   */
  srcDir: "./src",
});
