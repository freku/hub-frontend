import "highlight.js/styles/stackoverflow-light.css";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage("bash", bash);

  nuxtApp.vueApp.use(hljsVuePlugin);
});
