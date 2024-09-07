<script setup lang="ts">
const route = useRoute()

useHead({
  title: route.meta.title as string,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
