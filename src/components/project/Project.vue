<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { name, desc, repo } = defineProps<{
  name: string;
  desc: string;
  repo: string | null;
}>();

const { t } = useI18n();
const href = "https://github.com/madeinheaven91/" + repo;
</script>

<template>
  <h3>{{ name }}</h3>
  <p>{{ desc }}</p>
  <a v-if="repo" :href="href" target="_blank"
    ><small>{{ t("repo") }}</small></a
  >
</template>
