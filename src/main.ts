import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import ContactCard from "@/components/contact-card";
import Project from "@/components/project/Project.vue";
import LanguageSwitch from "@/components/language-switch";
import i18n from "@/i18n";


const app = createApp(App);
app
  .component("ContactCard", ContactCard)
  .component("Project", Project)
  .component("LanguageSwitch", LanguageSwitch);

app.use(i18n)
app.mount("#app");
