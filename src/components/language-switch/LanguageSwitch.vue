<script lang="ts" setup>
import { ref } from "vue";
import i18n from "@/i18n";

const isOpen = ref(false);
const langs = [
  {
    label: "Русский",
    code: "ru",
  },
  {
    label: "English",
    code: "en",
  },
];
const activeLang = ref(langs[0]);

function changeLang(lang: any) {
  activeLang.value = lang;
  isOpen.value = false;
  i18n.global.locale.value = lang.code;
}
</script>

<template>
  <div class="relative">
    <div
      class="language border-1 rounded-md p-3 flex gap-1 items-center"
      @mouseenter="isOpen = true"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <i class="pi pi-language"></i>
      <i class="text-lg pi pi-chevron-down"></i>
    </div>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute top-0 right-0"
        @mouseleave="isOpen = false"
      >
        <div
          class="bg-[var(--bg)] right-0 mt-15 border-1 rounded-md p-3 flex flex-col gap-1 items-end"
        >
          <span
            v-for="lang in langs"
            class="item px-3"
            :class="{ active: activeLang.code == lang.code }"
            @click="changeLang(lang)"
          >
            {{ lang.label }}</span
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.language {
  background-color: var(--bg);
}
.language:hover {
  background-color: #351216;
  transition-duration: 0.3s;
}
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  transform-origin: top center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.95);
}

.item {
    @apply w-full;
    border-radius: 6px;
}
.item:hover,
.active {
  color: var(--fg);
  background-color: #351216;
  transition-duration: 0.3s;
}
</style>
