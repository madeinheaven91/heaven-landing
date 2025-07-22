<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LanguageSwitch from "@/components/language-switch";
import { LanguageSwitchMobile } from "@/components/language-switch";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const isDesktop = computed(() => width.value >= 1024);
const isMobile = computed(() => width.value <= 640);

const { t } = useI18n();
</script>

<template>
  <main>
    <div
      class="absolute -z-10"
      :class="isDesktop ? 'right-[0%] top-[0%]' : 'left-[50%] top-[10%]'"
    >
      <img src="/images/sun.png" class="filter w-auto h-auto max-w-screen" />
    </div>

    <div class="flex justify-between items-center">
      <h1><b>Made In Heaven</b></h1>
      <LanguageSwitch v-if="isDesktop" />
      <LanguageSwitchMobile v-else />
    </div>
    <hr class="style-seven" />
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

    <h2>{{ t("misc") }}</h2>
    <hr />
    <section>
      <div
        class="grid gap-5"
        :class="isDesktop ? 'grid-cols-3' : 'grid-rows-3'"
      >
        <Card
          icon="pi-telegram"
          :name="t('channel')"
          :description="t('channel-desc')"
          href="https://t.me/jazz_coding"
          border
        />
        <Card
          icon="pi-pen-to-square"
          :name="t('blog')"
          :description="t('blog-desc')"
          href="https://madeinheaven.space/blog"
          border
        />
        <Card
          icon="pi-book"
          :name="t('library')"
          :description="t('library-desc')"
          href="https://library.madeinheaven.space/"
          border
        />
      </div>
    </section>
  </main>

  <footer>
    <h2 class="text-center">{{ t("contacts") }}</h2>
    <section>
      <template v-if="!isMobile">
        <div
          class="grid gap-5"
          :class="isDesktop ? 'grid-cols-3 w-[50%] mx-auto' : 'grid-rows-3'"
        >
          <Card
            icon="pi-telegram"
            :name="t('telegram')"
            :description="t('telegram-desc')"
            href="https://t.me/madeinheaven91"
          />
          <Card
            icon="pi-github"
            :name="t('github')"
            :description="t('github-desc')"
            href="https://github.com/madeinheaven91"
          />
          <Card
            icon="pi-at"
            :name="t('email')"
            :description="t('email-desc')"
            href="mailto:biznizjunk@gmail.com"
          />
        </div>
      </template>

      <template v-else>
        <div class="mt-3 flex flex-col gap-2">
          <div class="flex justify-center gap-3 items-center">
            <i class="pi pi-telegram"></i>
            <a
              href="https://t.me/madeinheaven91"
              class="no-underline text-[var(--fg)]"
            >
              Telegram</a
            >
          </div>
          <div class="flex justify-center gap-3 items-center">
            <i class="pi pi-github"></i>
            <a
              href="https://github.com/madeinheaven91"
              class="no-underline text-[var(--fg)]"
            >
              Github</a
            >
          </div>

          <div class="flex justify-center gap-3 items-center">
            <i class="pi pi-at"></i>
            <a
              href="mailto:biznizjunk@gmail.com"
              class="no-underline text-[var(--fg)]"
            >
              Email</a
            >
          </div>
        </div>
      </template>
    </section>
  </footer>
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

footer {
  background-color: #030303;
}

footer section {
  padding-inline: 0;
}
</style>
