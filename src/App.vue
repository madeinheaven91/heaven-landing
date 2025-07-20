<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LanguageSwitch from "@/components/language-switch";
import { LanguageSwitchMobile } from "@/components/language-switch";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const isDesktop = computed(() => width.value >= 1024);

const { t } = useI18n();
</script>

<template>
  <img
    v-if="isDesktop"
    src="/images/sun.png"
    class="absolute filter -z-10 right-[0%] top-[0%]"
  />

  <img
    v-else
    src="/images/sun.png"
    class="absolute filter -z-10 left-[50%] top-[10%]"
  />

  <div class="flex justify-between items-center">
    <h1>Made in heaven</h1>
    <LanguageSwitch v-if="isDesktop" />
    <LanguageSwitchMobile v-else />
  </div>
  <hr />
  <section>
    <p>{{ t("about") }}</p>
    <p>{{ t("ul") }}</p>
    <ul>
      <li>{{ t("li1") }}</li>
      <li>{{ t("li2") }}</li>
      <li>{{ t("li3") }}</li>
    </ul>
  </section>

  <h2>{{ t("projects") }}</h2>
  <hr />
  <section>
    <Project
      name="Black Turtle"
      :desc="t('black-turtle')"
      repo="black-turtle-go"
    />
    <Project name="Masterbeat" :desc="t('masterbeat')" repo="masterbeat" />
    <Project name="JazzCoding" :desc="t('jazzcoding')" repo="heaven-web" />
  </section>

  <h2>{{ t("contacts") }}</h2>
  <hr />
  <section>
    <div class="grid gap-5"
        :class="isDesktop ? 'grid-cols-3' : 'grid-rows-3'">
      <ContactCard
        icon="pi-telegram"
        :name="t('telegram')"
        :description="t('telegram-desc')"
        href="https://t.me/madeinheaven91"
      />
      <ContactCard
        icon="pi-github"
        :name="t('github')"
        :description="t('github-desc')"
        href="https://github.com/madeinheaven91"
      />
      <ContactCard
        icon="pi-at"
        :name="t('email')"
        :description="t('email-desc')"
        href="mailto:biznizjunk@gmail.com"
      />
    </div>
  </section>

  <h2>{{ t("misc") }}</h2>
  <hr />
  <section>
    <div class="grid gap-5"
        :class="isDesktop ? 'grid-cols-3' : 'grid-rows-3'">
      <ContactCard
        icon="pi-telegram"
        :name="t('channel')"
        :description="t('channel-desc')"
        href="https://t.me/jazz_coding"
      />
      <ContactCard
        icon="pi-pen-to-square"
        :name="t('blog')"
        :description="t('blog-desc')"
        href="https://madeinheaven.space/blog"
      />
      <ContactCard
        icon="pi-book"
        :name="t('library')"
        :description="t('library-desc')"
        href="https://library.madeinheaven.space/"
      />
    </div>
  </section>
</template>

<style scoped>
/* https://angel-rs.github.io/css-color-filter-generator/ */
.filter {
  filter: invert(14%) sepia(15%) saturate(3995%) hue-rotate(305deg)
    brightness(50%) contrast(92%);
}

section {
  padding-inline: 1rem;
}
</style>
