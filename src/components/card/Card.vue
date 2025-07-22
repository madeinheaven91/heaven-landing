<script lang="ts" setup>
defineProps<{
  name: string;
  description: string;
  icon: string;
  href: string;
  border: boolean;
}>();
</script>

<template>
  <div class="card rounded-md p-5" :class="border ? 'border-1' : ''">
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
  background-color: rgba(255, 255, 255, 0.02);
  transition-duration: 0.3s;
}
</style>
