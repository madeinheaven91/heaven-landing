<script lang="ts" setup>
defineProps<{
  name: string;
  description: string;
  icon: string;
  href: string;
}>();
</script>

<template>
  <div class="card border-1 rounded-md p-5">
    <a :href="href" target="_blank" class="no-underline">
      <div class="flex flex-row gap-3">
        <i class="pi mt-1" :class="icon"></i>
        <h4 class="mt-0">{{ name }}</h4>
      </div>
      <small>{{ description }}</small>
    </a>
  </div>
</template>

<style scoped>
.card:hover {
  background-color: #351216;
  transition-duration: 0.3s;
}
</style>
